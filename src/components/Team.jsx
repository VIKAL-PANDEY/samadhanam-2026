import React from 'react';
import './Team.css';

const coreTeam = [
  { name: 'Yogesh Sharma', role: 'Hack Lead, UI/UX & Developer', img: 'https://i.pinimg.com/736x/1f/8a/df/1f8adf7db6e79d72353b5172325b2657.jpg', isLead: true },
  { name: 'Vaibhav Pandey', role: 'Java & Backend Engineer', img: 'https://i.pinimg.com/736x/c7/94/a5/c794a51c6555956c5bca2e616197d23a.jpg' },
  { name: 'Vaibhav Singh Thakur', role: 'Sitemap Designer', img: 'https://i.pinimg.com/736x/8e/37/a7/8e37a7835f3667f235453dffc3ef9df0.jpg' },
  { name: 'Shrikant Patel', role: 'Junior Java Developer', img: 'https://i.pinimg.com/736x/13/0e/00/130e00b3955ed8b2753673eed4d739d7.jpg' },
  { name: 'Suhani Patel', role: 'Junior Python Developer', img: 'https://i.pinimg.com/736x/ff/09/45/ff0945afb684e59379eadf99e74adfeb.jpg' },
  { name: 'Avni Gupta', role: 'Content Designer & DB Manager', img: 'https://i.pinimg.com/736x/34/d7/f5/34d7f5d109940cde3905035bf4d9314c.jpg' },
  { name: 'Uzair Ahmad', role: 'Architect', img: 'https://i.pinimg.com/736x/9d/7a/44/9d7a44c7a0aaec25565576db5ece2680.jpg' },
  { name: 'Vikal Pandey', role: 'DB Manager & Python Developer', img: 'https://i.pinimg.com/736x/cd/f8/0c/cdf80ce16d3022d6ad82958eacfa5839.jpg' },
  { name: 'Yash Bhalse', role: 'Architect', img: 'https://i.pinimg.com/736x/ac/d1/6d/acd16d60cfe25e04d8bf8c72604c1fff.jpg' },
  { name: 'Aditi Sharma', role: 'Technical Support', img: 'https://i.pinimg.com/736x/f7/a0/d1/f7a0d1339e6914180a342f3f2f378321.jpg' },
  { name: 'Ashi Mahule', role: 'Technical Support', img: 'https://i.pinimg.com/736x/b6/6a/b4/b66ab4265693b1cdcd164de21fa74acc.jpg' },
  { name: 'Ujwal Arya', role: 'Java Developer', img: 'https://i.pinimg.com/736x/f6/3b/58/f63b5864e73889e35faf3e12aad28dfe.jpg' }
];

const volunteers = [
  { name: 'Mansi Shukla', role: 'Lead Volunteer', img: 'https://i.pinimg.com/736x/11/f9/f4/11f9f49db84309946bd8193fa1e41628.jpg' },
  { name: 'Saksham Tiwari', role: 'Operations Support', img: 'https://i.pinimg.com/736x/9a/4c/ed/9a4cedc4557058fbab0038625bf3609f.jpg' },
  { name: 'Tisha Jain', role: 'Content & Coordination', img: 'https://i.pinimg.com/736x/67/12/ee/6712eebf48ccf5807334b049b94d7fb5.jpg' },
  { name: 'Vikas Tiwari', role: 'Technical Support', img: 'https://i.pinimg.com/736x/73/1b/5c/731b5cd176e6ac2aa7292bbd9a1ef11f.jpg' }
];

const TeamCard = ({ member }) => (
  <div className={`team-card interactive ${member.isLead ? 'team-card-lead' : ''}`}>
    <div className="team-img-wrapper">
      <img src={member.img} alt={member.name} className="team-img" />
    </div>
    <div className="team-info">
      <div className="team-name">{member.name}</div>
      <div className="team-role">{member.role}</div>
    </div>
  </div>
);

export default function Team() {
  return (
    <section className="section team-section" id="team">
      <h2 className="team-header">CORE MANAGEMENT</h2>
      <div className="team-grid" data-lenis-prevent>
        {coreTeam.map((member, index) => (
          <TeamCard key={`core-${index}`} member={member} />
        ))}
      </div>

      <h2 className="team-header" style={{ color: 'var(--color-white)', textShadow: '4px 4px 0px var(--color-black)' }}>
        EVENT VOLUNTEERS
      </h2>
      <div className="team-grid" data-lenis-prevent>
        {volunteers.map((member, index) => (
          <TeamCard key={`vol-${index}`} member={member} />
        ))}
      </div>
    </section>
  );
}
