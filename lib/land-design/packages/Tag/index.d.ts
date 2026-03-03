import { default as React } from 'react';
import { TagProps, CheckableTagProps, TagGroupProps, LegacyTagProps } from './props';
declare const Tag: React.FC<TagProps & LegacyTagProps> & {
    CheckableTag: typeof CheckableTag;
    Group: typeof TagGroup;
};
declare const CheckableTag: React.FC<CheckableTagProps>;
declare const TagGroup: React.FC<TagGroupProps>;
export default Tag;
