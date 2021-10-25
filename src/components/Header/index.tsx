import React from "react";
import propTypes from "prop-types";
import styles from "./Header.module.scss";

function Header({
	languages,
	selectedLanguage,
	keyword,
	onChangeKeyword,
	onChangeLanguage
}: any) {

	return (
		<div className={styles.header}>
			<label className={styles.label}>
				Search:
				<input onChange={onChangeKeyword} name='keyword' value={keyword} type='text' />
			</label>
			{languages.map((item: string) => {
				return (
					<label key={item} className={styles.label}>
						<input onChange={onChangeLanguage} name='language' value={item} type='radio' checked={item === selectedLanguage} />
						{item}
					</label>
				)
			})}
		</div>
	);

}

Header.propTypes = {
	languages: propTypes.any,
	selectedLanguage: propTypes.string,
	keyword: propTypes.string,
	onChangeKeyword: propTypes.func,
	onChangeLanguage: propTypes.func,
};

export default Header;