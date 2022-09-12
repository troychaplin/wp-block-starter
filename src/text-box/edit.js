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
            {/* <BlockControls
                // Less flexible than ToolbarGroup & ToolbarButton components
                // This method of setting controls only allows for buttons
                controls={[
                    {
                        title: "Undo",
                        icon: "undo",
                        onClick: () => console.log("Button 1 clicked")
                    },
                    {
                        title: "Settings",
                        icon: "admin-settings",
                        isActive: true,
                        onClick: () => console.log("Button 2 clicked")
                    }
                ]}
            /> */}
            <RichText
                {...useBlockProps({
                    className: `text-box-align-${alignment}`
                })}
                onChange={onChangeText}
                value={text}
                placeholder={'Add some text for your block'}
                tagName="p"
                allowedFormats={[ 'core/bold', 'core/italic' ]}
                // style={{textAlign: alignment}}
            />
        </>
    );
}
