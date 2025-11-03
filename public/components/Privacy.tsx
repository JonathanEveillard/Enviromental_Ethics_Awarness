"use client"
import React, { useState } from 'react'

export const Privacy = () => {
  const [expandedSections, setExpandedSections] = useState<Set<number>>(new Set())
  const [searchTerm, setSearchTerm] = useState('')

  const toggleSection = (sectionId: number) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId)
    } else {
      newExpanded.add(sectionId)
    }
    setExpandedSections(newExpanded)
  }

  const expandAll = () => {
    setExpandedSections(new Set(Array.from({ length: 30 }, (_, i) => i + 1)))
  }

  const collapseAll = () => {
    setExpandedSections(new Set())
  }

  const scrollToSection = (sectionId: number) => {
    const element = document.getElementById(`section-${sectionId}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      // Auto-expand when navigating
      if (!expandedSections.has(sectionId)) {
        toggleSection(sectionId)
      }
    }
  }

  const sections = [
    { id: 1, title: 'Information Collection', color: 'blue' },
    { id: 2, title: 'Types of Data Collected', color: 'green' },
    { id: 3, title: 'Purpose of Data Collection', color: 'purple' },
    { id: 4, title: 'Voluntary Participation', color: 'amber' },
    { id: 5, title: 'Informed Consent', color: 'rose' },
    { id: 6, title: 'Anonymization Procedures', color: 'cyan' },
    { id: 7, title: 'Data Storage Security', color: 'indigo' },
    { id: 8, title: 'Audio Recording Policy', color: 'teal' },
    { id: 9, title: 'Photographic Documentation', color: 'lime' },
    { id: 10, title: 'Right to Access', color: 'orange' },
    { id: 11, title: 'Right to Rectification', color: 'pink' },
    { id: 12, title: 'Right to Withdrawal', color: 'violet' },
    { id: 13, title: 'Data Sharing Limitations', color: 'slate' },
    { id: 14, title: 'Third-Party Services', color: 'emerald' },
    { id: 15, title: 'Confidentiality Assurance', color: 'sky' },
    { id: 16, title: 'Institutional Oversight', color: 'fuchsia' },
    { id: 17, title: 'Minors and Vulnerable Populations', color: 'red' },
    { id: 18.1, title: 'Data Retention Period', color: 'yellow' },
    { id: 18.2, title: 'Permanent Data Erasure', color: 'amber', highlight: true },
    { id: 19, title: 'Breach Notification', color: 'blue' },
    { id: 20, title: 'Geographic Scope', color: 'green' },
    { id: 21, title: 'Legal Compliance', color: 'purple' },
    { id: 22, title: 'Use in Publications', color: 'rose' },
    { id: 23, title: 'Contact Information Handling', color: 'cyan' },
    { id: 24, title: 'Cookies and Website Tracking', color: 'indigo' },
    { id: 25, title: 'Transparent Communication', color: 'teal' },
    { id: 26, title: 'Policy Updates', color: 'lime' },
    { id: 27, title: 'Dispute Resolution', color: 'orange' },
    { id: 28, title: 'Rights Under Canadian Law', color: 'pink' },
    { id: 29, title: 'Contact for Privacy Inquiries', color: 'violet' },
    { id: 30, title: 'Acknowledgment of Understanding', color: 'slate' }
  ]

  const filteredSections = sections.filter((section) =>
    section.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Content mapping for each section
  const getSectionContent = (id: number): string => {
    const contentMap: { [key: number]: string } = {
      1: "We collect information that you voluntarily provide during interviews, surveys, and research interactions. This may include your views, opinions, demographic information, and contact details (if provided with consent).",
      2: "Data collected includes audio recordings of interviews, written notes, photographic documentation of public spaces, and any voluntary written responses. Personal identifiers are collected only when explicitly consented to by participants.",
      3: "All data is collected solely for academic research purposes to analyze local perspectives on sustainable agriculture and environmental ethics. Data will be used to produce reports, presentations, and educational materials for Carleton University.",
      4: "Participation in this research is entirely voluntary. You may choose to decline participation, withdraw consent at any time, or refuse to answer specific questions without penalty or explanation.",
      5: "All participants are informed of the project's purpose, data collection methods, usage of information, and their rights before participation. Written or verbal consent is obtained and documented prior to any data collection activity.",
      6: "Personal identifiers such as names, addresses, and contact information are anonymized in all public-facing materials, reports, and presentations. Participants are assigned pseudonyms or numerical codes to protect their identity.",
      7: "All collected data is stored securely in password-protected digital drives with restricted access. Only authorized research team members have access to raw data containing personal identifiers.",
      8: "Audio recordings of interviews are made only with explicit consent. Recordings are used solely for transcription and analysis purposes and are not shared with third parties outside the research team.",
      9: "Photographs taken during field research focus on locations, agricultural practices, and public spaces. No identifiable individuals are included in photographs without explicit written consent.",
      10: "Participants have the right to access their personal data at any time. You may request copies of your interview transcripts or any information collected about you by contacting the research team.",
      11: "If you believe any information we hold about you is inaccurate or incomplete, you have the right to request correction. We will update or amend records promptly upon verification.",
      12: "You may withdraw your consent and request removal of your data from the study at any time before final publication. Upon withdrawal, all identifiable data associated with you will be permanently deleted.",
      13: "Raw data containing personal identifiers is never shared with external parties. Only anonymized, aggregated findings are presented in public reports, presentations, or publications.",
      14: "We do not use third-party data processing services. All data handling, transcription, and analysis are conducted internally by the research team.",
      15: "All research team members are bound by confidentiality agreements. Team members are trained in ethical research practices and data protection protocols.",
      16: "This research project operates under the ethical guidelines and oversight of Carleton University. All procedures comply with institutional research ethics policies.",
      17: "We do not knowingly collect data from individuals under 18 years of age or vulnerable populations without proper consent from legal guardians or appropriate institutional approval.",
      18.1: "Anonymized research data may be retained for academic archival purposes in accordance with university policies. Personal identifiers are deleted as outlined in Section 18.2.",
      18.2: "All data utilizing participant's anonymous information are effectively erased permanently after 24hrs of final deliverable.",
      19: "In the unlikely event of a data breach, all affected participants will be notified immediately. We will provide details of the breach, potential impact, and remedial actions taken.",
      20: "This research is conducted within Ottawa, Ontario, Canada. Data is stored and processed within Canada in compliance with Canadian privacy laws and regulations.",
      21: "We comply with all applicable Canadian privacy legislation, including the Personal Information Protection and Electronic Documents Act (PIPEDA) and provincial privacy laws.",
      22: "Anonymized research findings may be used in academic publications, conference presentations, and educational materials. No personal identifiers will be included in any public-facing content.",
      23: "If you provide contact information, it is used only for follow-up research communication and is stored separately from interview data to maintain anonymity.",
      24: "This website does not use cookies or tracking technologies to collect personal information. No analytics or third-party tracking scripts are deployed.",
      25: "We are committed to transparent communication about data use. Participants receive clear information about how their data contributes to the research and final deliverables.",
      26: "This Privacy Policy may be updated to reflect changes in research practices or legal requirements. Participants will be notified of significant changes via email or website announcement.",
      27: "If you have concerns about how your data is handled, please contact the research team. Unresolved disputes may be escalated to Carleton University's Research Ethics Board.",
      28: "As a participant in Canadian research, you have rights under federal and provincial privacy laws, including the right to access, correct, and request deletion of your personal information.",
      29: "For questions or concerns about this Privacy Policy or your data, please contact the research team at the email address provided on the project website or through Carleton University's official channels.",
      30: "By participating in this research project, you acknowledge that you have read, understood, and agree to the terms outlined in this Privacy Policy. Your consent is documented and retained as part of our ethical research practices."
    }
    return contentMap[id] || ""
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Hero */}
      <section className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Legal / Privacy Policy</p>
            <h1 className="mt-2 text-2xl font-extrabold tracking-tight">Privacy Policy &amp; Data Protection</h1>
            <p className="mt-3 text-lg text-gray-600 max-w-2xl">How we collect, use, and protect your information in our research project</p>
          </div>
          <div className="hidden md:flex gap-3">
            <span className="text-sm text-gray-500">Last Updated: October 15th, 2025</span>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mb-8">
        <div className="bg-linear-to-br from-blue-50 to-white border border-blue-100 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-3">Policy</h2>
          <p className="text-gray-700 text-base leading-relaxed">
            This Privacy Policy outlines how the Local Views on Agriculture, Sustainability and the Central Experimental Farm research project. We collects, uses, maintains, and discloses information collected from participants. This policy applies to all data collected through interviews, surveys, field observations, and any other research activities associated with this project.
          </p>
        </div>
      </section>

      {/* Interactive Controls & Table of Contents */}
      <section className="mb-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Controls */}
        <div className="bg-white shadow rounded-lg p-6 border border-gray-200">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span>🎛️</span>
            Quick Controls
          </h2>
          <div className="space-y-3">
            <input
              type="text"
              placeholder=" Search sections..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={expandAll}
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600 transition"
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="w-full px-4 py-2 bg-gray-500 text-white rounded-md text-sm hover:bg-gray-600 transition"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="lg:col-span-2 bg-white shadow rounded-lg p-6 border border-gray-200">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span>📋</span>
            Table of Contents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-96 overflow-y-auto">
            {filteredSections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id as number)}
                className={`text-left px-3 py-2 rounded text-sm hover:bg-gray-100 transition ${
                  section.highlight ? 'bg-amber-50 font-semibold' : ''
                }`}
              >
                <span className="text-gray-500">Section {section.id}</span> · {section.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Sections - Dynamic & Collapsible */}
      <section className="space-y-4">
        {filteredSections.map((section) => {
          const isExpanded = expandedSections.has(section.id as number)
          const sectionContent = getSectionContent(section.id as number)
          
          return (
            <div
              key={section.id}
              id={`section-${section.id}`}
              className={`shadow rounded-lg p-6 border-l-4 border-${section.color}-500 ${
                section.highlight
                  ? 'bg-linear-to-br from-amber-50 to-white shadow-lg border-amber-600'
                  : 'bg-white'
              } transition-all duration-200 hover:shadow-lg`}
            >
              <button
                onClick={() => toggleSection(section.id as number)}
                className="w-full text-left flex items-center justify-between gap-4"
              >
                <h3 className={`font-semibold text-lg text-gray-900 flex items-center gap-2 ${
                  section.highlight ? 'flex-1' : ''
                }`}>
                  {section.highlight && <span className="text-amber-600">🔒</span>}
                  Section {section.id} | {section.title}
                </h3>
                <span className={`text-2xl transition-transform duration-200 ${
                  isExpanded ? 'rotate-180' : ''
                }`}>
                  {isExpanded ? '▲' : '▼'}
                </span>
              </button>
              
              {isExpanded && (
                <div className="mt-4 animate-fadeIn">
                  <p className={`text-gray-700 text-base leading-relaxed ${
                    section.highlight ? 'font-medium' : ''
                  }`}>
                    {sectionContent}
                  </p>
                </div>
              )}
            </div>
          )
        })}
      </section>

      {/* Footer Notice */}
      <section className="mt-12 bg-linear-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-3">Questions or Concerns?</h2>
        <p className="text-gray-700 text-base leading-relaxed">
          If you have any questions about this Privacy Policy or how your data is being used in our research, please don&apos;t hesitate to contact the research team at Jonathaneveillard@cmail.carleton.ca - We are committed to transparency and protecting your rights as a research participant.
        </p>
        <p className="text-gray-500 text-sm mt-4">
          Research Team: Local Views on Agriculture, Sustainability and the Central Experimental Farm<br />
          Carleton University | PHIL 2380A - Introduction to Environmental Ethics
        </p>
      </section>
    </div>
  )
}
