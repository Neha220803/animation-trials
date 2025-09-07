import React from "react";
import Spline from "@splinetool/react-spline";
import "./styles.css";

const ContactPage = () => {
  return (
    <div className=" h-screen">
      <div className="text-7xl text-center w-full"> Contact Us</div>

      <Spline scene="https://prod.spline.design/6vjHTAHwot5s9u2s/scene.splinecode" />
      <section className="bg-primary timeline-section">
        <h1 className="text-4xl text-white text-center mb-8">
          Timeline Section
        </h1>

        {/* Container for sticky functionality */}
        <div className="timeline-container">
          <div className="timeline-content">
            {/* Left sticky column */}
            <div className="left-sticky-column">
              <div className="sticky-content">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Our Journey
                </h2>
                <p className="text-white">
                  This content will stick to the top while you scroll through
                  the timeline on the right.
                </p>
                <div className="mt-6 p-4 bg-white/10 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Key Milestones
                  </h3>
                  <ul className="text-white space-y-2">
                    <li>• Founded in 2020</li>
                    <li>• First major client</li>
                    <li>• Team expansion</li>
                    <li>• International reach</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right scrollable column */}
            <div className="right-scroll-column">
              <div className="timeline-item">
                <h3 className="text-2xl font-bold text-white mb-4">
                  2020 - The Beginning
                </h3>
                <p className="text-white mb-6">
                  HMS Queen Mary was the last battlecruiser built by the Royal
                  Navy before the First World War. The sole member of her class,
                  Queen Mary shared many features with the Lion-class
                  battlecruisers, including her eight 13.5-inch (343 mm) guns.
                  She was completed in 1913 and participated in the Battle of
                  Heligoland Bight as part of the Grand Fleet in 1914.
                </p>
              </div>

              <div className="timeline-item">
                <h3 className="text-2xl font-bold text-white mb-4">
                  2021 - First Major Project
                </h3>
                <p className="text-white mb-6">
                  Like most of the modern British battlecruisers, the ship never
                  left the North Sea during the war. As part of the 1st
                  Battlecruiser Squadron, Queen Mary attempted to intercept a
                  German force that bombarded the North Sea coast of England in
                  December 1914, but was unsuccessful. The ship was refitted in
                  early 1915 and missed the Battle of Dogger Bank in January.
                </p>
              </div>

              <div className="timeline-item">
                <h3 className="text-2xl font-bold text-white mb-4">
                  2022 - Team Expansion
                </h3>
                <p className="text-white mb-6">
                  She participated in the largest fleet action of the war, the
                  Battle of Jutland in mid-1916. She was hit twice by the German
                  battlecruiser Derfflinger during the early part of the battle
                  and her magazines exploded shortly afterwards, sinking her
                  with the loss of 1,266 of her 1,286 crew members.
                </p>
              </div>

              <div className="timeline-item">
                <h3 className="text-2xl font-bold text-white mb-4">
                  2023 - International Reach
                </h3>
                <p className="text-white mb-6">
                  Her wreck was discovered in 1991 and rests in pieces, some of
                  which are upside down, on the bed of the North Sea. Queen Mary
                  is designated as a protected place under the Protection of
                  Military Remains Act 1986 as a war grave. Design Drawing of
                  three-stacked battlecruiser Left elevation and deck plan of
                  the Lion-class battlecruisers.
                </p>
              </div>

              <div className="timeline-item">
                <h3 className="text-2xl font-bold text-white mb-4">
                  2024 - Innovation Phase
                </h3>
                <p className="text-white mb-6">
                  Queen Mary was ordered, together with the four battleships of
                  the King George V class, under the 1910–11 Naval Programme. As
                  was the usual pattern of the time, only one battlecruiser was
                  ordered per naval programme. She differed from her
                  predecessors of the Lion class in the distribution of her
                  secondary armament and armour.
                </p>
              </div>

              <div className="timeline-item">
                <h3 className="text-2xl font-bold text-white mb-4">
                  2025 - Current Day
                </h3>
                <p className="text-white mb-6">
                  Every capital ship since the design of the battleship
                  Dreadnought in 1905 had placed the officers' quarters closer
                  to their action stations amidships; after complaints from the
                  Fleet, Queen Mary was the first battlecruiser to restore the
                  quarters to their traditional place in the stern. In addition,
                  she was the first battlecruiser to mount a sternwalk.
                </p>
              </div>

              <div className="timeline-item">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Future Plans
                </h3>
                <p className="text-white mb-6">
                  Queen Mary, the only ship of her name ever to serve in the
                  Royal Navy, was named for Mary of Teck, the wife of King
                  George V. The Queen's representative at the ship's christening
                  on 20 March 1912 was the wife of Viscount Allendale. Slightly
                  larger than the preceding Lion-class ships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
