
import { Mail, Phone, MapPin, Facebook, Twitter, Code, Palette, Zap, Users, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with advanced features",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
      tech: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Portfolio Website",
      description: "Creative portfolio showcasing design work",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      tech: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Mobile App Design",
      description: "UI/UX design for fitness tracking application",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop",
      tech: ["Figma", "React Native", "TypeScript"]
    },
    {
      title: "Dashboard Analytics",
      description: "Data visualization dashboard for business insights",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
      tech: ["Vue.js", "D3.js", "Python"]
    }
  ];

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Creating responsive and modern websites using latest technologies"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Designing beautiful and intuitive user interfaces and experiences"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Optimizing websites for speed, SEO, and better user experience"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Consulting",
      description: "Providing technical consultation and project management services"
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center gradient-bg-1 curve-bottom">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full floating"></div>
          <div className="absolute bottom-32 right-32 w-24 h-24 bg-white rounded-full floating" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 bg-white rounded-full floating" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-6 text-center text-white relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-yellow-300">Clare Gichero</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Creative Developer & Designer crafting digital experiences that matter
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 rounded-full px-8">
                View My Work
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 rounded-full px-8">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50 curve-both relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient">About Me</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with over 5 years of experience creating 
                  digital solutions that combine beautiful design with powerful functionality.
                </p>
                <p>
                  My journey began with a fascination for how technology can solve real-world problems. 
                  Today, I specialize in building responsive web applications, crafting intuitive user 
                  experiences, and bringing creative ideas to life through code.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new design trends, contributing to 
                  open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {['React', 'TypeScript', 'Node.js', 'Python', 'Figma', 'AWS'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="blob-shape bg-gradient-to-br from-purple-400 to-pink-400 p-8">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=500&fit=crop" 
                  alt="About me" 
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              I offer a comprehensive range of services to bring your digital vision to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 gradient-bg-3 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 gradient-bg-2 curve-both relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">My Work</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              A showcase of projects that demonstrate my skills and creativity
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden rounded-3xl border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Get In Touch</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Ready to start your next project? Let's create something amazing together.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto gradient-bg-3 rounded-2xl flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-gray-300">clare@portfolio.com</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto gradient-bg-1 rounded-2xl flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto gradient-bg-2 rounded-2xl flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Location</h3>
                <p className="text-gray-300">Kenya</p>
              </div>
            </div>
            
            <div className="flex justify-center space-x-6">
              <a 
                href="#" 
                className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Facebook className="w-6 h-6 text-white" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Twitter className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-white text-center">
        <div className="container mx-auto px-6">
          <p className="text-gray-400">
            © 2025 Clare Gichero Portfolio. Crafted with <span className="text-red-500">♥</span> and creativity.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
