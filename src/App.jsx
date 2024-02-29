import './index.css';
import LanguageButton from './LanguageButton';
import { useTranslation } from 'react-i18next';

function App() {
    const [t, i18n] = useTranslation('global');
    i18n

    return (
        <div className="bg-gray-800 flex justify-center px-24 py-20 relative">
            <LanguageButton />
            <div className="mx-auto px-5 mb-4 max-w-3xl flex flex-col items-center">
                <div className="flex items-center w-full">
                    <img
                        src="img/PFP.jpg"
                        alt=""
                        className="h-[160px] w-[160px] ring-opacity-90 object-cover rounded-[100%]"
                    />

                    <div className="flex flex-col ml-7">
                        <h1 className="text-4xl font-bold text-slate-100 mb-3">
                            David Sánchez Romero
                        </h1>
                        <p className="text-lg text-slate-300">
                            {t('profile.likes')}
                        </p>
                        <a href='/CV.pdf' download={'/public/CV.pdf'} className="duration-[250ms] bg-indigo-500 hover:bg-opacity-80 w-fit p-1 px-3 rounded-lg mt-3  text-indigo-100">
                            {t('profile.download-cv')}
                        </a>
                    </div>
                </div>

                <hr className="border-t-2 border-gray-700 w-full my-14" />

                <div className="w-full">
                    <h1 className="text-2xl font-bold text-slate-200">
                        {t('experience.title')}
                    </h1>

                    <div className="mt-8">
                        <h2 className="text-lg font-semibold text-slate-300">
                            {t('experience.second-title')}
                        </h2>
                        <span className="text-slate-400 text-sm">
                            {t('experience.second-title-dates')}
                        </span>
                        <div className="text-gray-300 ml-3 mt-3 leading-7">
                            {t('experience.second-title-description')}
                        </div>
                    </div>

                    <div className="mt-16">
                        <h2 className="text-lg font-semibold text-slate-300">
                            {t('experience.first-title')}
                        </h2>
                        <span className="text-slate-400 text-sm">
                            {t('experience.first-title-dates')}
                        </span>
                        <div className="text-gray-300 ml-3 mt-3 leading-7">
                            {t('experience.first-title-description')}
                        </div>
                    </div>
                </div>

                <div className="w-full mt-24">
                    <h1 className="text-2xl font-bold text-slate-200">
                        {t('projects.title')}
                    </h1>

                    <a
                        target="_blank"
                        rel='noreferrer'
                        className="duration-[350ms] flex mt-8 border-2 border-gray-700 h-56 rounded-lg hover:border-gray-500 hover:translate-x-1 hover:-translate-y-1 cursor-pointer"
                    >
                        <img
                            src="/img/Rubiks.png"
                            alt=""
                            className="object-cover h-full w-60 rounded-tl-lg rounded-bl-lg"
                        />
                        <div className="px-6 py-4 flex flex-col justify-between">
                            <div>
                                <h2 className="text-slate-100 font-semibold text-2xl mb-2">
                                    Rubik&apos;s Timer
                                </h2>
                                <p className="text-gray-300 text-md">
                                    {t('projects.first-project')}
                                </p>
                            </div>
                            <div className="flex">
                                <img
                                    className="w-10 h-10"
                                    src="svg/brand-javascript.svg"
                                    alt=""
                                />
                                <img
                                    className="w-10 h-10 mx-2"
                                    src="svg/brand-react.svg"
                                    alt=""
                                />
                                <img
                                    className="w-10 h-10"
                                    src="svg/brand-tailwind.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </a>

                    <a
                        target="_blank"
                        rel='noreferrer'
                        className="duration-[350ms] flex mt-8 border-2 border-gray-700 h-56 rounded-lg hover:border-gray-500 hover:translate-x-1 hover:-translate-y-1 cursor-pointer"
                    >
                        <img
                            src="/img/O-Science.png"
                            alt=""
                            className="object-cover h-full w-60 bg rounded-tl-lg rounded-bl-lg"
                        />
                        <div className="px-6 py-4 flex flex-col justify-between">
                            <div>
                                <h2 className="text-slate-100 font-semibold text-2xl mb-2">
                                    O-Science
                                </h2>
                                <p className="text-gray-300 text-md">
                                    {t('projects.second-project')}
                                </p>
                            </div>
                            <div className="flex">
                                <img
                                    className="w-10 h-10 mx-2"
                                    src="/svg/brand-react.svg"
                                    alt=""
                                />
                                <img
                                    className="w-10 h-10"
                                    src="/svg/brand-tailwind.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </a>
                </div>

                <div className="w-full mt-24">
                    <h1 className="text-2xl font-bold text-slate-200">
                        {t('contact-title')}
                    </h1>
                    <div className="flex mt-8">
                        <a
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/david-s%C3%A1nchez-romero-0496a5244/"
                            target="_blank"
                            className="duration-[350ms] border-2 border-gray-700 h-14 rounded-lg hover:border-gray-500 hover:translate-x-1 hover:-translate-y-1 cursor-pointer w-fit px-3 py-6 flex items-center text-lg"
                        >
                            <img
                                src="/svg/linkedin.svg"
                                alt=""
                                className="h-8"
                            />
                            <span className="text-[#0e76a8] ml-3 font-semibold">
                                Linkedin
                            </span>
                        </a>

                        <a
                            rel="noreferrer"
                            href="https://github.com/ChiniGumy/"
                            target="_blank"
                            className="duration-[350ms] ml-4 border-2 border-gray-700 h-14 rounded-lg hover:border-gray-500 hover:translate-x-1 hover:-translate-y-1 cursor-pointer w-fit px-3 py-6 flex items-center text-lg"
                        >
                            <img src="/svg/github.svg" alt="" className="h-8" />
                            <span className="text-[#8f9191] ml-3 font-semibold">
                                Github
                            </span>
                        </a>

                        <a
                            rel="noreferrer"
                            href="mailto:dsebastiansr24@gmail.com"
                            target="_blank"
                            className="duration-[350ms] ml-4 border-2 border-gray-700 h-14 rounded-lg hover:border-gray-500 hover:translate-x-1 hover:-translate-y-1 cursor-pointer w-fit pl-3 pr-4 py-6 flex items-center text-lg"
                        >
                            <img src="/svg/mail.svg" alt="" className="h-8" />
                            <span className="text-[#ced5db] ml-3 font-semibold">
                                Email
                            </span>
                        </a>

                        <a
                            rel="noreferrer"
                            href="https://instagram.com/dsebastiansr24"
                            target="_blank"
                            className="duration-[350ms] ml-4 border-2 border-gray-700 h-14 rounded-lg hover:border-gray-500 hover:translate-x-1 hover:-translate-y-1 cursor-pointer w-fit px-3 py-6 flex items-center text-lg"
                        >
                            <img src="/svg/ig.svg" alt="" className="h-8" />
                            <span className="text-[#cc547c] ml-3 font-semibold">
                                Instagram
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
