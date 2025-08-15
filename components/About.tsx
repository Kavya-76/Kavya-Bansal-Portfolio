const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          
          {/* User Avatar positioned below heading */}
          <div className="flex justify-center mb-12">
            <div className="w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
              KB
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 text-center">
            <h3 className="text-2xl font-semibold">Hello! I'm Kavya Bansal</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              


              I'm an aspiring full-stack web developer fueled by a passion for creating user-centered digital solutions and a curiosity for solving real-world problems through code. My development journey started with hands-on projects—both personal and academic—where I gained experience in modern web technologies such as React, Node.js, MongoDB, and Next.js.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In addition to web development, I am actively learning the foundations of machine learning and data science. This growing interest has helped me build a basic understanding of data-driven problem solving, including projects that explore data analysis, predictive modeling, and the use of libraries like Pandas and Scikit-learn.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm now seeking opportunities to apply my skills, collaborate with experienced teams, and grow
              into a professional developer while continuing to learn and explore new technologies.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8 max-w-2xl mx-auto">
              <div>
                <h4 className="font-semibold text-lg mb-2">Email</h4>
                <p className="text-muted-foreground">kavyabansal2000@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Phone</h4>
                <p className="text-muted-foreground">+91 7017378529</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
