import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return <p { ...useBlockProps.save() }>Example block one: save.js</p>;
}
