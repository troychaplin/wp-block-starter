import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return <p { ...useBlockProps() }>Example block one: edit.js</p>;
}
