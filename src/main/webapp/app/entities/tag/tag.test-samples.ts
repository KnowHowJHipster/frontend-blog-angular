import { ITag, NewTag } from './tag.model';

export const sampleWithRequiredData: ITag = {
  id: 486,
  name: 'brr bake unimpressively',
};

export const sampleWithPartialData: ITag = {
  id: 6828,
  name: 'daily nurture carriage',
};

export const sampleWithFullData: ITag = {
  id: 29897,
  name: 'meanwhile',
};

export const sampleWithNewData: NewTag = {
  name: 'single but monthly',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
