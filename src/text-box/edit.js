import { useBlockProps, RichText, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import './editor.scss';

export default function Edit({attributes, setAttributes}) {
    const { text, alignment } = attributes;
    const onChangeAlignment = (newAlignment) => {
        setAttributes({alignment: newAlignment})
    }
    const onChangeText = (newText) => {
        setAttributes({text: newText})
    }
    
	return (
        <>
            <BlockControls>
                <AlignmentToolbar value={alignment} onChange={onChangeAlignment} />
            </BlockControls>
            <BlockControls
                // Less flexible than ToolbarGroup & ToolbarButton components
                // This method of setting controls only allows for buttons
                controls={[
                    {
                        title: "Custom",
                        icon: "lightbulb",
                        onClick: () => console.log("Custom button clicked")
                    }
                ]}
            />
            <RichText
                {...useBlockProps({
                    className: `text-box-align-${alignment}`
                })}
                onChange={onChangeText}
                value={text}
                placeholder={'Add some text for your block'}
                tagName="p"
                allowedFormats={[ 'core/bold', 'core/italic' ]}
            />
        </>
    );
}
