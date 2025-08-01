import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaHeart } from "react-icons/fa";
import { testimonialData } from "../../Data/tetimonial";

const TestimonialSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl text-secondary">
            Apa Kata Anggota Kami
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Pengalaman nyata dari para mahasiswa yang telah bergabung dan
            berkembang bersama kami di HIMTI Learning Group.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md transition-transform hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={testimonial.image}
                    alt={`Profil ${testimonial.name}`}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">{testimonial.handle}</p>
                </div>

                <div className="ml-auto flex items-center space-x-3">
                  <a
                    href={testimonial.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                    className="text-gray-400 hover:text-gray-800 transition-colors"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={testimonial.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Instagram"
                    className="text-gray-400 hover:text-pink-500 transition-colors"
                  >
                    <FaInstagram size={20} />
                  </a>
                  <a
                    href={testimonial.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.testimonial}</p>
              <div className="flex items-center mt-4 text-gray-500">
                <FaHeart className="w-5 h-5 mr-1 text-red-500" />
                <span className="mr-4 font-medium">{testimonial.likes}</span>
                <span className="text-sm ml-auto">{testimonial.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
