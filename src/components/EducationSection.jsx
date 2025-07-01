import React from "react";

export const EducationSection = () => (
  <section id="education" className="py-24 px-4 bg-secondary/30">
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-4xl font-bold mb-12 text-center tracking-wider">
        EDUCATION
      </h2>
      <div className="space-y-10">
        {/* College */}
        <div className="flex flex-col md:flex-row items-center rounded-2xl shadow-xl overflow-hidden relative min-h-[220px] md:min-h-[220px]">
          <div className="w-full md:w-1/3 h-48 md:h-auto">
            <img
              src="/projects/srmrmp.webp"
              alt="SRM University, Ramapuram"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 p-6 md:p-10">
            <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-2">
              B.Tech (CSE)
            </h3>
            <div className="text-lg font-medium mb-1">
              SRM Institute of Science and Technology
            </div>
            <div className="text-muted-foreground mb-2">
              Ramapuram, Chennai
            </div>
            <div className="text-base text-muted-foreground mb-1">
              GPA: 9.72
            </div>
          </div>
          <div className="absolute right-6 top-6 md:static md:right-auto md:top-auto md:self-center">
            <span className="text-2xl font-bold text-gray-200 select-none md:rotate-90 md:text-3xl tracking-widest">
              2023-2027
            </span>
          </div>
        </div>
        {/* School */}
        <div className="flex flex-col md:flex-row items-center rounded-2xl shadow-xl overflow-hidden relative min-h-[220px] md:min-h-[220px]">
          <div className="w-full md:w-1/3 h-48 md:h-auto">
            <img
              src="/projects/Velammal-Vidhyashram-Surapet-Chennai.webp"
              alt="Velammal Vidhyashram, Surapet"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 p-6 md:p-10">
            <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-2">
              Senior Secondary (CS Stream)
            </h3>
            <div className="text-lg font-medium mb-1">
              Velammal Vidhyashram, Surapet
            </div>
            <div className="text-muted-foreground mb-2">
              Chennai, Tamil Nadu
            </div>
            <div className="text-base text-muted-foreground mb-1">
              CBSE (Central Board of Secondary Education)
            </div>
            
          </div>
          <div className="absolute right-6 top-6 md:static md:right-auto md:top-auto md:self-center">
            <span className="text-2xl font-bold text-gray-200 select-none md:rotate-90 md:text-3xl tracking-widest">
              2021-2023
            </span>
          </div>
        </div>
      </div>
      </div>
      </section>
);