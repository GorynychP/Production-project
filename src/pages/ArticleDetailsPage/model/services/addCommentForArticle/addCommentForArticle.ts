import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getUserAuthData } from '@/entities/User';
import { getArticleDetailsData } from '@/entities/Article';
// 'https://863e9faeb060e6b2.mokky.dev/auth'

export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>('articleDetails/addCommentForArticle', async (textComment, thunkAPI) => {
    const articleData = getArticleDetailsData(thunkAPI.getState());
    const userData = getUserAuthData(thunkAPI.getState());
    if (!articleData || !userData || !textComment) {
        return thunkAPI.rejectWithValue('no data');
    }
    try {
        const response = await thunkAPI.extra.api.post<Comment>('/comments', {
            articleId: articleData?.id,
            userId: userData?.id,
            text: textComment,
        });

        if (!response.data) {
            throw new Error();
        }
        thunkAPI.dispatch(fetchCommentsByArticleId(articleData.id));
        return response.data;
    } catch (e) {
        console.log(e);
        return thunkAPI.rejectWithValue('error');
    }
});
