// Resources
// RichText https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/rich-text/README.md

import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({attributes, setAttributes}) {
    const {text} = attributes;
	return (
        <RichText
            {...useBlockProps()}
            onChange={ (value) => setAttributes({text: value}) }
            value={text}
            placeholder={'Add some text for your block'}
            tagName="p"
            allowedFormats={['core/bold', 'core/italic']}
        />
    );
}
