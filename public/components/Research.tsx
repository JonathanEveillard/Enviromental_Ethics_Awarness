import React from 'react'

const Research = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Hero */}
      <section className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Research / Environmental Ethics Project</p>
            <h1 className="mt-2 text-2xl font-extrabold tracking-tight">Local Views on Agriculture, Sustainability &amp; the Central Experimental Farm</h1>
            <p className="mt-3 text-lg text-gray-600 max-w-2xl">Explore sustainable and ethical practices at the experimental farm</p>
          </div>
          <div className="hidden md:flex gap-3">
            <button className="inline-flex items-center p-3 bg-black text-white rounded-md shadow-sm hover:brightness-95">View Full Report</button>
          </div>
        </div>
      </section>

      {/* Main content sections */}
      <section className="space-y-8">
        {/* Section 1: Local Issue */}
        <div className="bg-white shadow rounded-lg p-8">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🌱</span>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-3">Local Issue</h2>
              <p className="text-sm text-gray-500 mb-4">Understanding community awareness of sustainable agriculture practices</p>
              <div className="bg-linear-to-br from-blue-50 to-white border border-blue-100 rounded-lg p-6">
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

        {/* Section 2: Field Research */}
        <div className="bg-white shadow rounded-lg p-8">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📸</span>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-3">Field Research</h2>
              <p className="text-sm text-gray-500 mb-4">Primary data collection through interviews, observations, and documentation</p>
              
              <div className="space-y-4">
                {/* Interview Findings */}
                <div className="bg-linear-to-br from-green-50 to-white border border-green-100 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <span className="text-green-600">💬</span>
                    Interview Findings
                  </h3>
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

        {/* Section 3: Ethical Frameworks */}
        <div className="bg-white shadow rounded-lg p-8">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">⚖️</span>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-3">Apply Course Frameworks</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-linear-to-br from-purple-50 to-white border border-purple-100 rounded-md p-6">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <span className="text-purple-600">👥</span>
                    Stakeholders Analysis
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    The primary stakeholders in this issue include local residents living around the Central Experimental Farm, farm employees, researchers, Carleton University students, and local farmers. Each group is affected by how agricultural practices influence the environment, food systems, and public understanding of sustainability. The local community benefits through environmental preservation, education, and access to locally grown produce, while policymakers and researchers benefit from the Farm&apos;s data and experimental outcomes. However, those same groups especially smaller producers may also face barriers when sustainable practices increase costs or limit accessibility. Decision-making largely rests with federal and institutional authorities that manage the Farm&apos;s research priorities and land use policies, which can sometimes distance community members from directly influencing sustainability decisions that affect their shared environment.
                  </p>
                </div>
                
                <div className="bg-linear-to-br from-blue-50 to-white border border-blue-100 rounded-md p-6">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <span className="text-blue-600">💰</span>
                    Costs &amp; Benefits
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Economically, sustainable farming practices can raise short-term costs due to investments in eco-friendly technologies, reduced chemical use, and ethical sourcing, but they create long-term benefits through improved soil health, biodiversity, and reduced environmental degradation. Environmentally, sustainable agriculture reduces pollution, preserves water resources, and mitigates climate impacts, strengthening the ecosystem around the Central Experimental Farm. Socially, the benefits include increased awareness, educational opportunities, and stronger community identity rooted in environmental stewardship. However, barriers such as higher prices for local produce and reduced convenience for consumers may limit widespread adoption. Overall, the environmental and social benefits strongly outweigh the economic challenges in the long term.
                  </p>
                </div>
                
                <div className="bg-linear-to-br from-rose-50 to-white border border-rose-100 rounded-md p-6">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <span className="text-rose-600">🤝</span>
                    Rights Framework
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    From a rights-based perspective, the issue involves balancing human rights, animal welfare, and environmental protection. Humans have the right to access safe, sustainable food and to live in a healthy environment. Animals, as sentient beings, have a moral claim to humane treatment and ethical consideration in farming practices. The environment itself holds intrinsic rights to preservation and regeneration, which are often overlooked in human-centered agricultural systems. The challenge lies in ensuring that the pursuit of human progress does not violate the rights of other living beings or ecosystems. Sustainable farming aims to respect all three human, animal, and environmental rights by promoting harmony between consumption, production, and conservation.
                  </p>
                </div>
                
                <div className="bg-linear-to-br from-green-50 to-white border border-green-100 rounded-md p-6">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <span className="text-green-600">🌍</span>
                    Justice &amp; Land Ethic
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    The concept of environmental justice emphasizes fair treatment and meaningful involvement of all people in environmental decision-making, regardless of socioeconomic background. In the context of the Central Experimental Farm, justice involves ensuring that local communities share in both the benefits and responsibilities of sustainability initiatives. Intergenerational equity plays a central role acknowledging that present actions must not compromise the ability of future generations to access clean soil, air, and water. Following Aldo Leopold&apos;s Land Ethic, this project views humans as members, not masters, of the land community. Stewardship, rather than exploitation, becomes the guiding principle: to care for the land and all living systems as moral equals, ensuring a future where both human and ecological communities thrive together.
                  </p>
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
  )
}

export default Research