const StatCard = ({ count, label }) => (
  <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
    <div className="border-2 border-gray-200 px-4 py-6 rounded-lg text-center">
      <h2 className="title-font font-bold text-3xl text-primary">{count}</h2>
      <p className="leading-relaxed text-secondary">{label}</p>
    </div>
  </div>
);

const StatsSection = () => {
  const stats = [
    { count: "150+", label: "Anggota Aktif" },
    { count: "10+", label: "Program Berjalan" },
    { count: "20+", label: "Mentor Berpengalaman" },
  ];

  return (
    <section className="text-gray-600 body-font bg-gray-50">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-secondary">
            Komunitas Kami dalam Angka
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Kami terus tumbuh dan berkembang bersama para anggota yang antusias.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {stats.map((stat, index) => (
            <StatCard key={index} count={stat.count} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;