import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({attributes}) {
    const {text} = attributes;
    return (
        <RichText.Content
            {...useBlockProps.save()}
            tagName="p"
            value={text}
        />
    );
}
