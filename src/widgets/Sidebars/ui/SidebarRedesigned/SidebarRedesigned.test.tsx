import { fireEvent, screen } from '@testing-library/react';
import { SidebarRedesigned } from './SidebarRedesigned';
import { componentRender } from '@/shared/lib/test/componentRender/componentRender';

describe('SidebarRedesigned', () => {
    test('Test render Sidebar', () => {
        componentRender(<SidebarRedesigned />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('Test toggleBtn Sidebar', () => {
        componentRender(<SidebarRedesigned />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('Sidebar');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
        // screen.debug();
    });
});
