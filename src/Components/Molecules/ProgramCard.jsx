import React from 'react';

const icons = {
  web: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  ),
  mobile: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
  ),
  uiux: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.998 15.998 0 011.622-3.385m5.043.025a15.998 15.998 0 00-1.622-3.385m3.388 1.62a15.998 15.998 0 01-3.388-1.62m-16.5 7.478a15.998 15.998 0 013.388-1.618m-1.62 3.385a15.998 15.998 0 011.622 3.385m1.622-3.385a15.998 15.998 0 003.388 1.622m-5.043.025a15.998 15.998 0 01-1.622 3.385m-1.622-3.385a15.998 15.998 0 00-3.388-1.622m16.5 7.478a15.998 15.998 0 00-3.388-1.618m1.62-3.385a15.998 15.998 0 00-1.622-3.385m-5.043-.025a15.998 15.998 0 01-1.622-3.385m-3.388 1.62A15.998 15.998 0 015.464 4.5m1.62 3.385a15.998 15.998 0 013.388 1.618m1.62-3.385a15.998 15.998 0 01-1.622-3.385" />
    </svg>
  ),
  network: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.045A5.25 5.25 0 017.5 15h-3a3 3 0 00-3 3v.158c0 .935.743 1.74 1.697 1.832l.401.041a6.352 6.352 0 006.114-6.114.75.75 0 00-.342-.75.75.75 0 00-.75-.342zM15.75 9a5.25 5.25 0 01.788-.045.75.75 0 00.342-.75.75.75 0 00-.75-.342 6.352 6.352 0 00-6.114 6.114c0 .32.083.626.236.898l.041.401c.092.954.9 1.697 1.832 1.697h.158a3 3 0 003-3v-3z" />
    </svg>
  ),
  workshop: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  ),
  sharing: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.952a4.5 4.5 0 011.08-2.018A5.964 5.964 0 0010.5 6h.008v.008h-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zM12 9.75h.008v.008H12V9.75zM9.75 9.75h.008v.008H9.75V9.75zM7.5 9.75h.008v.008H7.5V9.75z" />
    </svg>
  ),
};

const ProgramCard = ({ icon, title, description, link }) => {
  return (
    <div className=" p-8 bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex flex-col items-start h-full">
        <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-primary/10 text-primary mb-5">
          {icons[icon] || icons['web']}
        </div>
        <div className="flex-grow">
          <h2 className="text-secondary text-xl font-bold mb-3">{title}</h2>
          <p className="leading-relaxed text-base text-gray-700">{description}</p>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-primary inline-flex items-center"
        >
          Pelajari Lebih Lanjut
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProgramCard;