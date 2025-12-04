// import React from "react";

// const ProfilePage = () => {
//   const profile = {
//     name: "John Doe",
//     title: "Frontend Developer",
//     location: "San Francisco, CA",
//     experience: "5+ Years",
//     avatar:
//       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
//   };

//   return (
//     <div className="min-h-screen bg-[#020617] text-white">
//       {/* Top Navbar */}
//       <header className="w-full border-b border-white/10 bg-[#020617]/90 backdrop-blur-md">
//         <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
//           <div className="text-2xl font-bold tracking-tight">
//             <span className="text-white">John</span>
//             <span className="text-sky-400">.</span>
//           </div>
//           <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-200">
//             <a href="#home" className="hover:text-sky-400 transition-colors">
//               Home
//             </a>
//             <a href="#about" className="hover:text-sky-400 transition-colors">
//               About
//             </a>
//             <a href="#education" className="hover:text-sky-400 transition-colors">
//               Education
//             </a>
//             <a href="#skills" className="hover:text-sky-400 transition-colors">
//               Skills
//             </a>
//             <a href="#contact" className="hover:text-sky-400 transition-colors">
//               Contact
//             </a>
//           </nav>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section
//         id="home"
//         className="max-w-6xl mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center gap-16"
//       >
//         {/* Left: Text */}
//         <div className="flex-1">
//           <p className="text-sm font-semibold tracking-[0.2em] uppercase text-sky-400 mb-4">
//             Welcome
//           </p>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
//             Hi, I'm{" "}
//             <span className="text-white">
//               {profile.name}
//             </span>
//           </h1>
//           <h2 className="text-2xl md:text-3xl font-semibold text-sky-400 mb-6">
//             {profile.title}
//           </h2>
//           <p className="text-slate-300 max-w-xl mb-8 text-sm md:text-base leading-relaxed">
//             Passionate frontend developer with {profile.experience} of experience
//             crafting modern, responsive, and accessible web interfaces. Focused on
//             clean code, smooth animations, and great user experience.
//           </p>

//           <div className="flex flex-wrap items-center gap-4 mb-8">
//             <button className="px-6 py-3 rounded-full bg-sky-500 text-sm font-semibold hover:bg-sky-400 transition-colors">
//               Hire Me
//             </button>
//             <button className="px-6 py-3 rounded-full border border-sky-500 text-sky-400 text-sm font-semibold hover:bg-sky-500/10 transition-colors">
//               Let&apos;s Talk
//             </button>
//           </div>

//           <div className="flex items-center gap-4 text-slate-400 text-xs md:text-sm">
//             <span className="w-2 h-2 rounded-full bg-green-400" />
//             <span>
//               Available for freelance & full‑time opportunities • {profile.location}
//             </span>
//           </div>
//         </div>

//         {/* Right: Small Profile Image */}
//         <div className="flex-1 flex justify-center md:justify-end">
//           <div className="relative w-56 h-72 md:w-64 md:h-80 rounded-3xl overflow-hidden bg-gradient-to-b from-sky-500/20 to-transparent border border-sky-500/40">
//             <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
//             <img
//               src={profile.avatar}
//               alt={profile.name}
//               className="w-full h-full object-cover opacity-80"
//             />
//             <div className="absolute inset-0 ring-1 ring-sky-500/40 rounded-3xl" />
//           </div>
//         </div>
//       </section>

//       {/* Empty anchors so your existing sections can hook here later */}
//       <section id="about" />
//       <section id="education" />
//       <section id="skills" />
//       <section id="contact" />
//     </div>
//   );
// };

// export default ProfilePage;
