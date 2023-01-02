import type { Widget } from '$lib/data/types/Widget';

type Splitpanes = {
	type: 'SPLITPANES';
	id: string;
	horizontal: boolean;
	children: Array<Splitpanes | Pane>;
};

type Pane = {
	type: 'PANE';
	id: string;
	widget?: Widget;
};

export type { Pane, Splitpanes };
