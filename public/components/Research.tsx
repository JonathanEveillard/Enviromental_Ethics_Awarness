"use client"
import React, { useState } from 'react'

const Research = () => {
  const [showReportModal, setShowReportModal] = useState(false)

  return (
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Main content */}
      <div>
      {/* Hero */}
      <section className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-sm text-gray-500">Research / Environmental Ethics Project</p>
            <h1 className="mt-2 text-2xl font-extrabold tracking-tight">Local Views on Agriculture, Sustainability &amp; the Central Experimental Farm</h1>
            <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-full md:max-w-2xl">Explore sustainable and ethical practices at the experimental farm</p>
          </div>
          <div className="mt-3 md:mt-0">
            <button onClick={() => setShowReportModal(true)} className="inline-flex items-center p-3 bg-black text-white rounded-md shadow-sm hover:brightness-95">View Full Report</button>
          </div>
        </div>
      </section>

      {/* Main content sections */}
      <section className="space-y-8">
        {/* Section 0: General Issue */}
        <div className="bg-white shadow rounded-lg p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div className="shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🌍</span>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-3">General Issue</h2>
              <p className="text-sm text-gray-500 mb-4">The broader environmental context of global agriculture</p>
              <div className="bg-linear-to-br from-indigo-50 to-white border border-indigo-100 rounded-lg p-4 sm:p-6">
                <div className="max-w-full md:max-w-2xl">
                  <h3 className="font-semibold text-lg mb-3">Agriculture&apos;s Environmental Role</h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Agriculture is a key part of human civilization because it gives us food, fiber, and other important resources. But its effects on the environment are complicated, with both good and bad effects. Farming can help protect soil by using methods like crop rotation, cover cropping, and agroforestry. It also helps biodiversity in managed landscapes, like pollinator habitats and hedgerows, and it can keep open green spaces that cool down cities and make the air cleaner.
                  </p>
                  <p className="text-gray-700 text-base leading-relaxed mt-4">
                    Sustainable farming methods like organic farming and precision agriculture try to use fewer chemicals, save water, and lower greenhouse gas emissions. However, industrial farming often leads to deforestation, soil degradation, and the loss of natural habitats, which lowers the number of different kinds of plants and animals. Using artificial fertilizers and pesticides can pollute water systems, which can hurt aquatic life and throw ecosystems off harmony.
                  </p>
                  <p className="text-gray-700 text-base leading-relaxed mt-4">
                    Raising livestock releases methane, a strong greenhouse gas, into the air. Large farming operations can also use soil nutrients and make plants more vulnerable to pests and diseases. In general, farming has both benefits and costs to the environment, so it is becoming more and more important to use sustainable and research-based methods to keep the environment healthy in the long term.
                  </p>
                  <h3 className="font-semibold text-lg mb-3 mt-6">The Central Experimental Farm</h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    The Central Experimental Farm is a working farm and national agricultural research center in Ottawa. The Farm is home to Agriculture and Agri-Food Canada, as well as labs, research plots, and the Ottawa Research and Development Centre. Its goal is to improve agricultural science through research, experimentation, and innovative concepts.
                  </p>
                  <p className="text-gray-700 text-base leading-relaxed mt-4">
                    Canadian agriculture has benefited significantly from the CEF. For example, the Canadian Prairies are now one of the world&apos;s top grain-producing regions thanks to the development of Marquis wheat, a strain that is early-maturing and resistant to frost. The Farm&apos;s researchers created flower varieties such as the Explorer series of roses and the Preston lilacs. The Farm is a public attraction with gardens, an arboretum, grain fields, and barnyard animals in addition to its scientific purpose as a National Historic Site. The site is maintained by volunteers from the Friends of the Farm group, who make sure it continues to be a center for research as well as a green area for enjoyment and education.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 1: Local Issue */}
        <div className="bg-white shadow rounded-lg p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div className="shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🌱</span>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-3">Local Issue</h2>
              <p className="text-sm text-gray-500 mb-4">Understanding community awareness of sustainable agriculture practices</p>
              <div className="bg-linear-to-br from-blue-50 to-white border border-blue-100 rounded-lg p-4 sm:p-6">
                <div className="max-w-full md:max-w-2xl">
                  <p className="text-gray-700 text-base leading-relaxed">
                    The local issue our project addresses is the community&apos;s limited understanding and engagement with sustainable agriculture practices at Ottawa&apos;s Central Experimental Farm. While the Farm plays a vital role in agricultural research and environmental sustainability, many residents and students nearby are unaware of its significance or how its practices impact local ecosystems and food systems.
                  </p>
                  <p className="text-gray-700 text-base leading-relaxed mt-4">
                    This issue matters because sustainability is not only a scientific concern but an ethical and community one how people think about farming directly influences how they value the environment and support sustainable change. By exploring local opinions and analyzing them through ethical frameworks like anthropocentrism and ecosocialism, our project highlights the need for stronger public awareness and dialogue between researchers, residents, and policymakers.
                  </p>
                  <p className="text-gray-700 text-base leading-relaxed mt-4">
                    Understanding these perspectives is essential for fostering a more informed, responsible, and environmentally conscious community in Ottawa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Field Research */}
        <div className="bg-white shadow rounded-lg p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div className="shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📸</span>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-3">Field Research</h2>
              <p className="text-sm text-gray-500 mb-4">Primary data collection through interviews, observations, and documentation</p>

              <div className="space-y-4">
                {/* Interview Findings */}
                <div className="bg-linear-to-br from-green-50 to-white border border-green-100 rounded-lg p-4 sm:p-6">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <span className="text-green-600">💬</span>
                    Interview Findings
                  </h3>
                  <div className="max-w-full md:max-w-2xl">
                    <p className="text-gray-700 text-base leading-relaxed">
                      The interview with a Central Experimental Farm Museum employee revealed a generally positive and pragmatic view of agriculture&apos;s role in the environment. The interviewee demonstrated strong awareness of the Farm&apos;s long history in advancing agricultural research and its national importance in developing sustainable practices. They viewed modern farming as having a net-positive environmental impact due to ongoing innovations that reduce harm, such as improved soil management, reduced tilling, and adjustments in livestock feeding to lower emissions.
                    </p>
                    <p className="text-gray-700 text-base leading-relaxed mt-3">
                      The participant expressed clear support for local and sustainable food sourcing, motivated by environmental consciousness and a desire to strengthen the local economy, though they acknowledged that higher prices and limited convenience often make this difficult. Ethically, they recognized both moral concerns surrounding animal agriculture and the reality of human dependence on farming, emphasizing that while some practices are questionable, many producers strive to act responsibly.
                    </p>
                    <p className="text-gray-700 text-base leading-relaxed mt-3">
                      Overall, their responses reflected a balanced, human-centered (anthropocentric) perspective valuing sustainability not only for environmental reasons but as a means to ensure continued human well-being and agricultural productivity for future generations.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Ethical Frameworks */}
        <div className="bg-white shadow rounded-lg p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div className="shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">⚖️</span>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-3">Apply Course Frameworks</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-linear-to-br from-purple-50 to-white border border-purple-100 rounded-md p-4 sm:p-6">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <span className="text-purple-600">👥</span>
                    Stakeholders Analysis
                  </h3>
                  <div className="max-w-full md:max-w-xl">
                    <p className="text-gray-700 text-base leading-relaxed">
                      The primary stakeholders in this issue include local residents living around the Central Experimental Farm, farm employees, researchers, Carleton University students, and local farmers. Each group is affected by how agricultural practices influence the environment, food systems, and public understanding of sustainability. The local community benefits through environmental preservation, education, and access to locally grown produce, while policymakers and researchers benefit from the Farm&apos;s data and experimental outcomes. However, those same groups especially smaller producers may also face barriers when sustainable practices increase costs or limit accessibility. Decision-making largely rests with federal and institutional authorities that manage the Farm&apos;s research priorities and land use policies, which can sometimes distance community members from directly influencing sustainability decisions that affect their shared environment.
                    </p>
                  </div>
                </div>
                
                <div className="bg-linear-to-br from-blue-50 to-white border border-blue-100 rounded-md p-4 sm:p-6">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <span className="text-blue-600">💰</span>
                    Costs &amp; Benefits
                  </h3>
                  <div className="max-w-full md:max-w-xl">
                    <p className="text-gray-700 text-base leading-relaxed">
                      Economically, sustainable farming practices can raise short-term costs due to investments in eco-friendly technologies, reduced chemical use, and ethical sourcing, but they create long-term benefits through improved soil health, biodiversity, and reduced environmental degradation. Environmentally, sustainable agriculture reduces pollution, preserves water resources, and mitigates climate impacts, strengthening the ecosystem around the Central Experimental Farm. Socially, the benefits include increased awareness, educational opportunities, and stronger community identity rooted in environmental stewardship. However, barriers such as higher prices for local produce and reduced convenience for consumers may limit widespread adoption. Overall, the environmental and social benefits strongly outweigh the economic challenges in the long term.
                    </p>
                  </div>
                </div>
                
                <div className="bg-linear-to-br from-rose-50 to-white border border-rose-100 rounded-md p-4 sm:p-6">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <span className="text-rose-600">🤝</span>
                    Rights Framework
                  </h3>
                  <div className="max-w-full md:max-w-xl">
                    <p className="text-gray-700 text-base leading-relaxed">
                      From a rights-based perspective, the issue involves balancing human rights, animal welfare, and environmental protection. Humans have the right to access safe, sustainable food and to live in a healthy environment. Animals, as sentient beings, have a moral claim to humane treatment and ethical consideration in farming practices. The environment itself holds intrinsic rights to preservation and regeneration, which are often overlooked in human-centered agricultural systems. The challenge lies in ensuring that the pursuit of human progress does not violate the rights of other living beings or ecosystems. Sustainable farming aims to respect all three human, animal, and environmental rights by promoting harmony between consumption, production, and conservation.
                    </p>
                  </div>
                </div>
                
                <div className="bg-linear-to-br from-green-50 to-white border border-green-100 rounded-md p-4 sm:p-6">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <span className="text-green-600">🌍</span>
                    Justice &amp; Land Ethic
                  </h3>
                  <div className="max-w-full md:max-w-xl">
                    <p className="text-gray-700 text-base leading-relaxed">
                      The concept of environmental justice emphasizes fair treatment and meaningful involvement of all people in environmental decision-making, regardless of socioeconomic background. In the context of the Central Experimental Farm, justice involves ensuring that local communities share in both the benefits and responsibilities of sustainability initiatives. Intergenerational equity plays a central role acknowledging that present actions must not compromise the ability of future generations to access clean soil, air, and water. Following Aldo Leopold&apos;s Land Ethic, this project views humans as members, not masters, of the land community. Stewardship, rather than exploitation, becomes the guiding principle: to care for the land and all living systems as moral equals, ensuring a future where both human and ecological communities thrive together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Appendices */}
        <div className="bg-white shadow rounded-lg p-8">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📎</span>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-3">Appendices</h2>
              <p className="text-sm text-gray-500 mb-4">Supporting materials, documentation, and visual evidence collected throughout the research</p>
              
              <div className="space-y-4">
                {/* Photos & Visual Documentation */}
                <div className="bg-linear-to-br from-amber-50 to-white border border-amber-100 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <span className="text-amber-600">📷</span>
                    Photos &amp; Visual Documentation
                  </h3>
                  <p className="text-gray-400 italic">Currently Not Available <br/>{/*Content to be added: photographic documentation from field visits, site images, and visual records of agricultural practices at the Central Experimental Farm*/}</p>
                </div>

                {/* Additional Resources */}
                <div className="bg-linear-to-br from-green-50 to-white border border-green-100 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <span className="text-green-600">📚</span>
                    Additional Resources &amp; References
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span><strong>World Wildlife Foundation</strong>  Overview of sustainable agriculture and its environmental impacts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span><strong>Grow Canada Strong</strong>  Discussion of how agricultural practices affect the environment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span><strong>Eden Green Blog</strong>  Insights on agricultural innovation and environmental impacts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span><strong>MDPI Sustainability Journal</strong>  Systematic review on sustainable agriculture practices</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* Report Not Released Modal */}
      {showReportModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gray-100 border-b border-gray-300 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Research Report</h2>
              <button
                onClick={() => setShowReportModal(false)}
                className="text-gray-600 hover:text-gray-900 text-2xl font-bold"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Modal Content - PDF-like appearance */}
            <div className="p-8 sm:p-12 bg-white min-h-96 flex flex-col items-center justify-center">
              <div className="text-center">
                <div className="mb-6">
                  <svg className="w-20 h-20 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Report Not Available</h3>
                <p className="text-lg text-gray-600 max-w-md">
                  The full research report has not been released yet. Please check back later for updates.
                </p>
                <div className="mt-8">
                  <p className="text-sm text-gray-500 italic">
                    Check back soon for the complete research findings and analysis.
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-gray-50 border-t border-gray-300 p-6 flex justify-end">
              <button
                onClick={() => setShowReportModal(false)}
                className="px-6 py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-900 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Research