type Modes = Record<string, boolean | string>;

export function classNames(
	cls: string,
	mods: Modes,
	additional: string[],
): string {
	const obj = Object.entries(mods).filter(([cls, value]) => Boolean(value));
	console.log('obj', obj);
	return [
		cls,
		...additional,
		...Object.entries(mods)
			.filter(([className, value]) => Boolean(value))
			.map(([className, value]) => className),
	].join(' ');
}

// classNames('remove-btn', { hovered: true, selectable: true }, ['pdg']);
