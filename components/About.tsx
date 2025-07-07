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
              I'm a passionate full-stack developer with over 5 years of experience creating 
              digital solutions that make a difference. My journey in web development started 
              with curiosity and has evolved into a career dedicated to crafting exceptional 
              user experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in modern web technologies including React, Node.js, and cloud 
              platforms. When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8 max-w-2xl mx-auto">
              <div>
                <h4 className="font-semibold text-lg mb-2">Location</h4>
                <p className="text-muted-foreground">San Francisco, CA</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Experience</h4>
                <p className="text-muted-foreground">5+ Years</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Email</h4>
                <p className="text-muted-foreground">kavyabansal2000@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Phone</h4>
                <p className="text-muted-foreground">+ 91 7017378529</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
