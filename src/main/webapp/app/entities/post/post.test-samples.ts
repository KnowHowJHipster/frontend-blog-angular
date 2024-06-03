import dayjs from 'dayjs/esm';

import { IPost, NewPost } from './post.model';

export const sampleWithRequiredData: IPost = {
  id: 14713,
  title: 'apt though phew',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-06-03T06:25'),
};

export const sampleWithPartialData: IPost = {
  id: 14483,
  title: 'gosh',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-06-03T09:37'),
};

export const sampleWithFullData: IPost = {
  id: 22755,
  title: 'jade elderly',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-06-03T01:11'),
};

export const sampleWithNewData: NewPost = {
  title: 'shyly',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-06-03T03:32'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
