import React from 'react';
import instagram from '../img/social/instagram2.svg';
import mail from '../img/social/mail.svg';
import phone from '../img/social/phone.svg';

const ContactInfo = () => {
	return (
		<article className='contact-main column is-12-mobile is-4-desktop is-flex is-justify-content-center'>
			<section className='columns contact-card'>
				<div className='column is-12-mobile'>
					<span className='icon is-large'>
						<img src={phone} alt='instagram link' />
					</span>
					<p className='is-size-5-media'>+90 530 095 40 85</p>
				</div>
				<a
					className='column is-12-tablet'
					href='https://www.instagram.com/psikologmeltemulutas/'
					target='_blank'
					rel='noopener noreferrer'>
					<span className='icon is-large'>
						<img src={instagram} alt='instagram link' />
					</span>
					<p className='is-size-5-media'>instagram.com/psikologmeltemulutas</p>
				</a>
				<a
					className='column is-12-tablet'
					href='mailto:psikolog.meltem.ulutas@gmail.com'>
					<span className='icon is-large'>
						<img src={mail} alt='instagram link' />
					</span>
					<p className='is-size-5-media'>psikolog.meltem.ulutas@gmail.com</p>
				</a>
			</section>
		</article>
	);
};
export default ContactInfo;
