import React from 'react';
import { Link } from 'gatsby';
import { scale } from '../../utils/typography';

const Header = ({ pathname, title }) => {
  const isHomePage = pathname === `${__PATH_PREFIX__}/`;
  let TagName = 'h3';
  let styles = { marginBottom: 0 };

  if (isHomePage) {
    TagName = 'h1';
    styles = {
      ...scale(1.5),
      fontSize: '30px',
      marginBottom: '20px',
      marginTop: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.9)'
    };
  }

  return (
    <header>
      <TagName style={styles}>
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`
          }}
          to={`/`}
        >
          {title}
        </Link>
      </TagName>
    </header>
  );
}

export default Header;
