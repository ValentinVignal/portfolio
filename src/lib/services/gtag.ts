import type { SkillId } from '$lib/data/skills';

export enum GTagEvent {
	SkillClick = 'skill_filter',
	DownloadResume = 'download_resume'
}

export type GTagSkillClickData = {
	location: 'skill-page' | 'skill-chip';
	id: SkillId;
	selected: boolean;
};

export type GTag = {
	event: GTagEvent;
} & (
	| {
			event: GTagEvent.SkillClick;
			data: GTagSkillClickData;
	  }
	| { event: GTagEvent.DownloadResume }
);

export const gtagEvent = (event: GTag): void => {
	gtag('event', event.event, 'data' in event ? event.data : undefined);
};
