/**
 * WordPress dependencies
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Returns the save content for the block.
 *
 * @return {WPElement} Element to render.
 */

export default function save({ attributes }) {
	const { showStartingYear, startingYear } = attributes;
	const currentYear = new Date().getFullYear().toString();

	let displayDate;

	if (showStartingYear && startingYear) {
		displayDate = startingYear + "–" + currentYear;
	} else {
		displayDate = currentYear;
	}

	return <p {...useBlockProps.save()}>© {displayDate}</p>;
}
