import type { SkillId } from "$lib/data/skills";

export enum GTagEvent {
    SkillClick = 'skill_filter',
}

export type GTagSkillClickData = {
    location: 'skill-page' | 'skill-chip';
    id: SkillId;
    selected: boolean;
}

export type GTag = {
  event: GTagEvent;
  data: unknown;
} & {
    event: GTagEvent.SkillClick;
    data: GTagSkillClickData;
};

export const gtagEvent = (event: GTag): void => {
    gtag('event', event.event, event.data);
}