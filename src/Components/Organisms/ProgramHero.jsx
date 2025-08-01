import React from "react";
import { programsData } from "../../Data/programs";
import ProgramCard from "../Molecules/ProgramCard";

const ProgramHero = () => {
  return (
    <div className="bg-gray-50 animate-fade-in-up">
      <section className="container mx-auto px-4 py-24 pt-10 pb-6 sm:px-6">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-secondary">
            Program Unggulan Kami
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">
            Pilih jalur belajarmu dan mulailah perjalanan untuk menjadi seorang
            profesional di bidang teknologi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programsData.map((program) => (
            <ProgramCard
              key={program.id}
              icon={program.icon}
              title={program.title}
              description={program.description}
              link={program.link}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProgramHero;
