import React from 'react';
import '../styles/components/company.scss';

const Company = (props) => {
  const { companies } = props;

  return (
    <>
      {companies &&
        companies.map(
          ({
            id,
            logo,
            name,
            position,
            date,
            responsibilities,
            projects,
            skills,
          }) => (
            <article className='company blur' key={id}>
              <article className='company__left'>
                <div className='company__logo-section'>
                  {logo && (
                    <img
                      className='company__logo'
                      src={logo.img && require(`../assets/${logo.img}.png`)}
                      alt={logo.alt}
                    />
                  )}
                </div>
                <span className='company__name-company'>{name}</span>
              </article>

              <article className='company__right'>
                <section>
                  <label htmlFor={'position-' + id}>position:</label>
                  <span id={'position-' + id} className='company__position'>
                    {position}
                  </span>
                </section>
                <section>
                  <span id={'date-' + id} className='company__work-date'>
                    {date}
                  </span>
                </section>
                <section>
                  <ul
                    id={'responsibilities-' + id}
                    className='company__responsibilities'
                  >
                    {responsibilities &&
                      responsibilities.map((el, index) => (
                        <li key={index}>{el}</li>
                      ))}
                  </ul>
                </section>
                <section>
                  <label htmlFor={'projects-' + id}>projects:</label>
                  <ul id={'projects-' + id} className='company__projects'>
                    {projects &&
                      projects.map(({ id, link, name }) => (
                        <li key={id}>
                          <a
                            href={link}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            {name}
                          </a>
                        </li>
                      ))}
                    <li>& other local projects.</li>
                  </ul>
                </section>

                <section>
                  <label htmlFor={'stack-' + id}>skills:</label>
                  <ul id={'stack-' + id} className='stack'>
                    {skills &&
                      skills.map((el, index) => <li key={index}>{el}</li>)}
                  </ul>
                </section>
              </article>
            </article>
          )
        )}
    </>
  );
};

export default Company;
