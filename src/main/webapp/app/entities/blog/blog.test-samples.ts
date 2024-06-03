import { IBlog, NewBlog } from './blog.model';

export const sampleWithRequiredData: IBlog = {
  id: 7885,
  name: 'from cylindrical ouch',
  handle: 'against slimy that',
};

export const sampleWithPartialData: IBlog = {
  id: 10956,
  name: 'phooey poleaxe',
  handle: 'next',
};

export const sampleWithFullData: IBlog = {
  id: 20207,
  name: 'er loving without',
  handle: 'yahoo clearly',
};

export const sampleWithNewData: NewBlog = {
  name: 'outrageous aromatic whose',
  handle: 'telephone steep past',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
