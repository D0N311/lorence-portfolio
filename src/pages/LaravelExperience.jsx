import { useNavigate } from "react-router-dom";
import {
  X,
  Database,
  Globe,
  Code2,
  Zap,
  Shield,
  ArrowLeft,
} from "lucide-react";

function LaravelExperience() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>
          Laravel Experience - Lorence Palisan | Multi-Tenant & API Development
        </title>
        <meta
          name="description"
          content="Detailed Laravel development experience including multi-tenant applications, RESTful APIs, Eloquent ORM, Laravel Reverb, inventory tracking systems, and project management workflows."
        />
        <meta
          name="keywords"
          content="Laravel developer, PHP developer, multi-tenant architecture, Laravel API, Laravel Reverb, Eloquent ORM, backend development, RESTful API, MySQL, database design"
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://lorencepalisan.com/laravel-experience"
        />
        <meta
          property="og:title"
          content="Laravel Experience - Lorence Palisan | Multi-Tenant & API Development"
        />
        <meta
          property="og:description"
          content="Production-level Laravel experience building multi-tenant applications, RESTful APIs, and business management systems."
        />
        <meta
          property="og:image"
          content="https://lorencepalisan.com/og-laravel.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://lorencepalisan.com/laravel-experience"
        />
        <meta
          property="twitter:title"
          content="Laravel Experience - Lorence Palisan"
        />
        <meta
          property="twitter:description"
          content="Production-level Laravel experience building multi-tenant applications, RESTful APIs, and business management systems."
        />
        <meta
          property="twitter:image"
          content="https://lorencepalisan.com/og-laravel.jpg"
        />

        <link
          rel="canonical"
          href="https://lorencepalisan.com/laravel-experience"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header with Back Button */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Portfolio
            </button>
          </div>

          <div className="bg-slate-800/95 backdrop-blur-md rounded-2xl border border-slate-700/50 p-8 shadow-2xl">
            <div className="mb-8">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-4">
                Laravel Experience Overview
              </h1>
              <p className="text-gray-300 text-lg">
                Hands-on, production-level experience using Laravel for building
                and maintaining web-based business applications, particularly in
                multi-tenant and internal systems.
              </p>
            </div>

            {/* Key Experience Sections */}
            <div className="space-y-6">
              {/* Backend Development */}
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-600 to-orange-600 flex items-center justify-center flex-shrink-0">
                    <Database className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold mb-3 text-white">
                      Backend Development for Business Systems
                    </h2>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-1">•</span>
                        <span>
                          Developed internal systems such as item tracking /
                          inventory system during internship
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-1">•</span>
                        <span>
                          Built backend logic for project-based workflows,
                          including assigning multiple workers to a single
                          project (e.g., fabrication or service projects)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-1">•</span>
                        <span>
                          Implemented CRUD operations with complex relational
                          data structures
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Multi-Tenant Architecture */}
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-600 to-orange-600 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold mb-3 text-white">
                      Multi-Tenant Architecture
                    </h2>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-1">•</span>
                        <span>
                          Implemented multi-tenant application logic where each
                          registered owner/business operates in an isolated
                          environment
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-1">•</span>
                        <span>
                          Handled tenant onboarding flows, including business
                          profile setup and logo management
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-1">•</span>
                        <span>
                          Applied sensible defaults when tenant data is
                          incomplete for better UX
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* API and Data Modeling */}
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-600 to-orange-600 flex items-center justify-center flex-shrink-0">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold mb-3 text-white">
                      API & Data Modeling
                    </h2>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-1">•</span>
                        <span>
                          Designed structured data models (projects, workers,
                          inventory, tenants)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-1">•</span>
                        <span>
                          Produced JSON-based representations for system
                          architecture and data flow
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-1">•</span>
                        <span>
                          Built RESTful API endpoints for seamless frontend
                          integration
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Modern Frontend Integration */}
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-600 to-orange-600 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold mb-3 text-white">
                      Integration with Modern Frontends
                    </h2>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-1">•</span>
                        <span>
                          Worked with Laravel + React stacks, supporting SPA or
                          API-driven frontends
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-1">•</span>
                        <span>
                          Familiar with Laravel's role as a REST API provider
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-1">•</span>
                        <span>
                          Implemented real-time features with Laravel Reverb
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Production Practices */}
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-600 to-orange-600 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold mb-3 text-white">
                      Production-Oriented Practices
                    </h2>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-1">•</span>
                        <span>
                          Experience maintaining and enhancing existing systems,
                          not just greenfield development
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-1">•</span>
                        <span>
                          Applied Laravel in environments where data integrity,
                          maintainability, and scalability matter
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-400 mt-1">•</span>
                        <span>
                          Strong in CRUD systems, relational modeling, and
                          business logic
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Level */}
            <div className="mt-8 p-6 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-xl border border-red-500/30">
              <h2 className="text-2xl font-semibold mb-3 text-white">
                Experience Level
              </h2>
              <p className="text-gray-300 mb-4">
                <span className="font-semibold text-red-400">
                  Junior to Mid-Level Laravel Developer
                </span>{" "}
                with production experience
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-teal-400 mb-3 text-lg">
                    Strong Areas:
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400">✓</span>
                      <span>CRUD systems & relational modeling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400">✓</span>
                      <span>Multi-tenant concepts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400">✓</span>
                      <span>Business logic implementation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400">✓</span>
                      <span>API-driven architecture</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-orange-400 mb-3 text-lg">
                    Growing Toward:
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400">→</span>
                      <span>Advanced queueing & job pipelines</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400">→</span>
                      <span>High-scale performance tuning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400">→</span>
                      <span>Complex domain-driven design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400">→</span>
                      <span>Advanced testing strategies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="mt-8 p-6 bg-slate-900/70 rounded-lg border border-teal-500/30">
              <h3 className="font-semibold text-teal-400 text-lg mb-2">
                Professional Summary
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Hands-on experience developing multi-tenant web applications and
                internal business systems using Laravel, including inventory
                tracking, project management workflows, and API-driven
                integrations with React.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LaravelExperience;
