import { IoIosArrowDown } from "react-icons/io";
import './faqstyle.css'

import { useState } from "react";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const [active, setActive] = useState("FirstCard");
  const [fade, setFade] = useState(false);

  const { t } = useTranslation();

  const setSecondCard = () => {
    setActive("SecondCard")
    setFade(true)
  }

  return (
    <div
    style={{backgroundColor: "#F5F5F5",marginTop: "50px",paddingTop: "50px"}}
    >
    <section id="faq" className="w-11/12 lg:w-10/12 m-auto pb-20">
      <div
        className="text-center w-full m-auto 
            mb-16 lg:mb-24"
      >
        <h1 className="quicktitle">FAQ</h1>
        <h3 className="text-3xl text-gray-700 font-semibold my-4">
          Business Questions
        </h3>
        <p className="text-base">{t("faq.header.desc")}</p>
      </div>
      <div className="flex justify-between flex-col gap-8 lg:flex-row">
        <div>
          <ul className="w-full lg:w-80 flex flex-col gap-y-3 border p-6 rounded-md">
            <li
              className={`px-5 py-2 border rounded-md shadow-sm  font-semibold cursor-pointer relative ${active !== 'FirstCard' ? ' bg-white text-gray-600' : 'bg-blue-600 text-white'}`}
              onClick={() => setActive("FirstCard")}
            >
              {t("faq.category.1")}

            </li>
            <li
              className={`px-5 py-2 border rounded-md shadow-sm  font-semibold cursor-pointer relative ${active === 'SecondCard' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
              onClick={setSecondCard}
            >
              {t("faq.category.2")}

            </li>
            <li
              className={`px-5 py-2 border rounded-md shadow-sm  font-semibold cursor-pointer relative ${active === 'ThirdCard' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
              onClick={() => setActive("ThirdCard")}
            >
              {t("faq.category.3")}

            </li>
          
          </ul>
        </div>
        <div>
          
          {active === "FirstCard" && (
            <div>
                <h3 className="text-xl text-gray-600 font-semibold mb-7">
            Buying Product
          </h3>
            <div className="flex flex-col gap-y-4">
              <div className="relative w-full overflow-hidden border rounded-md py-1">
                <input
                  type="checkbox"
                  defaultChecked={true}
                  className="peer absolute top-0 inset-x-0 w-full h-12 z-10 cursor-pointer opacity-0"
                />
                <div className="h-12 w-full pl-5 flex items-center peer">
                  <h1 className="text-gray-700 font-semibold 
                  text-lg
                  ">
                    {t("faq.buyingQuestions.1.Q")}
                  </h1>
                </div>

                {/* Arrow Icon */}
                <div className="absolute top-4 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                  <IoIosArrowDown className="text-gray-700" />
                </div>

                {/* Content  */}
                <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
                  <div className="p-4">
                    <p className="text-gray-400">
                      {t("faq.buyingQuestions.1.A")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative w-full overflow-hidden border rounded-md py-1">
                <input
                  type="checkbox"
                  defaultChecked={true}
                  className="peer absolute top-0 inset-x-0 w-full h-12 z-10 cursor-pointer opacity-0"
                />
                <div className="h-12 w-full pl-5 flex items-center peer">
                  <h1 className="text-gray-700 font-semibold peer-checked:text-blue-500 text-lg">
                    {t("faq.buyingQuestions.2.Q")}
                  </h1>
                </div>

                {/* Arrow Icon */}
                <div className="absolute top-4 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                  <IoIosArrowDown className="text-gray-700" />
                </div>

                {/* Content  */}
                <div className="bg-white overflow-hidden transition-all duration-500 max-h-40 peer-checked:max-h-0">
                  <div className="p-4">
                    <p className="text-gray-400">
                      {t("faq.buyingQuestions.2.A")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative w-full overflow-hidden border rounded-md py-1">
                <input
                  type="checkbox"
                  defaultChecked={true}
                  className="peer absolute top-0 inset-x-0 w-full h-12 z-10 cursor-pointer opacity-0"
                />
                <div className="h-12 w-full pl-5 flex items-center peer">
                  <h1 className="text-gray-700 font-semibold peer-checked:text-blue-500 text-lg">
                    {t("faq.buyingQuestions.3.Q")}
                  </h1>
                </div>

                {/* Arrow Icon */}
                <div className="absolute top-4 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                  <IoIosArrowDown className="text-gray-700" />
                </div>

                {/* Content  */}
                <div className="bg-white overflow-hidden transition-all duration-500 max-h-40 peer-checked:max-h-0">
                  <div className="p-4">
                    <p className="text-gray-400">
                      {t("faq.buyingQuestions.3.A")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative w-full overflow-hidden border rounded-md py-1">
                <input
                  type="checkbox"
                  defaultChecked={true}
                  className="peer absolute top-0 inset-x-0 w-full h-12 z-10 cursor-pointer opacity-0"
                />
                <div className="h-12 w-full pl-5 flex items-center peer">
                  <h1 className="text-gray-700 font-semibold peer-checked:text-blue-500 text-lg">
                    {t("faq.buyingQuestions.4.Q")}
                  </h1>
                </div>

                {/* Arrow Icon */}
                <div className="absolute top-4 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                  <IoIosArrowDown className="text-gray-700" />
                </div>

                {/* Content  */}
                <div className="bg-white overflow-hidden transition-all duration-500 max-h-40 peer-checked:max-h-0">
                  <div className="p-4">
                    <p className="text-gray-400">
                      {t("faq.buyingQuestions.4.A")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          )}
          {active === "SecondCard" && (
            <div className={`transition-all duration-300 opacity-0 ${!fade ? "opacity-0" : "opacity-100"}`}>
                <h3 className="text-xl text-gray-600 font-semibold mb-7">
             General Questions
          </h3>
            <div className="flex flex-col gap-y-4">
              <div className="relative w-full overflow-hidden border rounded-md py-1">
                <input
                  type="checkbox"
                  defaultChecked={true}
                  className="peer absolute top-0 inset-x-0 w-full h-12 z-10 cursor-pointer opacity-0"
                />
                <div className="h-12 w-full pl-5 flex items-center peer">
                  <h1 className="text-gray-700 font-semibold text-lg">
                    {t("faq.generalQuestions.1.Q")}
                  </h1>
                </div>

                {/* Arrow Icon */}
                <div className="absolute top-4 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                  <IoIosArrowDown className="text-gray-700" />
                </div>

                {/* Content  */}
                <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
                  <div className="p-4">
                    <p className="text-gray-400">
                      {t("faq.generalQuestions.1.A")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative w-full overflow-hidden border rounded-md py-1">
                <input
                  type="checkbox"
                  defaultChecked={true}
                  className="peer absolute top-0 inset-x-0 w-full h-12 z-10 cursor-pointer opacity-0"
                />
                <div className="h-12 w-full pl-5 flex items-center peer">
                  <h1 className="text-gray-700 font-semibold peer-checked:text-blue-500 text-lg">
                    {t("faq.generalQuestions.2.Q")}
                  </h1>
                </div>

                {/* Arrow Icon */}
                <div className="absolute top-4 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                  <IoIosArrowDown className="text-gray-700" />
                </div>

                {/* Content  */}
                <div className="bg-white overflow-hidden transition-all duration-500 max-h-40 peer-checked:max-h-0">
                  <div className="p-4">
                    <p className="text-gray-400">
                      {t("faq.generalQuestions.2.A")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative w-full overflow-hidden border rounded-md py-1">
                <input
                  type="checkbox"
                  defaultChecked={true}
                  className="peer absolute top-0 inset-x-0 w-full h-12 z-10 cursor-pointer opacity-0"
                />
                <div className="h-12 w-full pl-5 flex items-center peer">
                  <h1 className="text-gray-700 font-semibold peer-checked:text-blue-500 text-lg">
                    {t("faq.generalQuestions.3.Q")}
                  </h1>
                </div>

                {/* Arrow Icon */}
                <div className="absolute top-4 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                  <IoIosArrowDown className="text-gray-700" />
                </div>

                {/* Content  */}
                <div className="bg-white overflow-hidden transition-all duration-500 max-h-40 peer-checked:max-h-0">
                  <div className="p-4">
                    <p className="text-gray-400">
                      {t("faq.generalQuestions.3.A")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative w-full overflow-hidden border rounded-md py-1">
                <input
                  type="checkbox"
                  defaultChecked={true}
                  className="peer absolute top-0 inset-x-0 w-full h-12 z-10 cursor-pointer opacity-0"
                />
                <div className="h-12 w-full pl-5 flex items-center peer">
                  <h1 className="text-gray-700 font-semibold peer-checked:text-blue-500 text-lg">
                    {t("faq.generalQuestions.4.Q")}
                  </h1>
                </div>

                {/* Arrow Icon */}
                <div className="absolute top-4 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                  <IoIosArrowDown className="text-gray-700" />
                </div>

                {/* Content  */}
                <div className="bg-white overflow-hidden transition-all duration-500 max-h-40 peer-checked:max-h-0">
                  <div className="p-4">
                    <p className="text-gray-400">
                      {t("faq.generalQuestions.4.A")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          )}
          {active === "ThirdCard" && (
            <div>
                <h3 className="text-xl text-gray-600 font-semibold mb-7">
            Payments Questions
          </h3>
            <div className="flex flex-col gap-y-4">
              <div className="relative w-full overflow-hidden border rounded-md py-1">
                <input
                  type="checkbox"
                  defaultChecked={true}
                  className="peer absolute top-0 inset-x-0 w-full h-12 z-10 cursor-pointer opacity-0"
                />
                <div className="h-12 w-full pl-5 flex items-center peer">
                  <h1 className="text-gray-700 font-semibold text-lg">
                    {t("faq.buyingQuestions.1.Q")}
                  </h1>
                </div>

                {/* Arrow Icon */}
                <div className="absolute top-4 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                  <IoIosArrowDown className="text-gray-700" />
                </div>

                {/* Content  */}
                <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
                  <div className="p-4">
                    <p className="text-gray-400">
                      {t("faq.buyingQuestions.1.A")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative w-full overflow-hidden border rounded-md py-1">
                <input
                  type="checkbox"
                  defaultChecked={true}
                  className="peer absolute top-0 inset-x-0 w-full h-12 z-10 cursor-pointer opacity-0"
                />
                <div className="h-12 w-full pl-5 flex items-center peer">
                  <h1 className="text-gray-700 font-semibold peer-checked:text-blue-500 text-lg">
                    {t("faq.buyingQuestions.2.Q")}
                  </h1>
                </div>

                {/* Arrow Icon */}
                <div className="absolute top-4 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                  <IoIosArrowDown className="text-gray-700" />
                </div>

                {/* Content  */}
                <div className="bg-white overflow-hidden transition-all duration-500 max-h-40 peer-checked:max-h-0">
                  <div className="p-4">
                    <p className="text-gray-400">
                      {t("faq.buyingQuestions.2.A")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative w-full overflow-hidden border rounded-md py-1">
                <input
                  type="checkbox"
                  defaultChecked={true}
                  className="peer absolute top-0 inset-x-0 w-full h-12 z-10 cursor-pointer opacity-0"
                />
                <div className="h-12 w-full pl-5 flex items-center peer">
                  <h1 className="text-gray-700 font-semibold peer-checked:text-blue-500 text-lg">
                    {t("faq.buyingQuestions.3.Q")}
                  </h1>
                </div>

                {/* Arrow Icon */}
                <div className="absolute top-4 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                  <IoIosArrowDown className="text-gray-700" />
                </div>

                {/* Content  */}
                <div className="bg-white overflow-hidden transition-all duration-500 max-h-40 peer-checked:max-h-0">
                  <div className="p-4">
                    <p className="text-gray-400">
                      {t("faq.buyingQuestions.3.A")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative w-full overflow-hidden border rounded-md py-1">
                <input
                  type="checkbox"
                  defaultChecked={true}
                  className="peer absolute top-0 inset-x-0 w-full h-12 z-10 cursor-pointer opacity-0"
                />
                <div className="h-12 w-full pl-5 flex items-center peer">
                  <h1 className="text-gray-700 font-semibold peer-checked:text-blue-500 text-lg">
                    {t("faq.buyingQuestions.4.Q")}
                  </h1>
                </div>

                {/* Arrow Icon */}
                <div className="absolute top-4 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                  <IoIosArrowDown className="text-gray-700" />
                </div>

                {/* Content  */}
                <div className="bg-white overflow-hidden transition-all duration-500 max-h-40 peer-checked:max-h-0">
                  <div className="p-4">
                    <p className="text-gray-400">
                      {t("faq.buyingQuestions.4.A")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          )}
          {active === "FourthCard" && (
            <div>
                <h3 className="text-xl text-gray-600 font-semibold mb-7">
                Support Questions
          </h3>
            <div className="flex flex-col gap-y-4">
              <div className="relative w-full overflow-hidden border rounded-md py-1">
                <input
                  type="checkbox"
                  defaultChecked={true}
                  className="peer absolute top-0 inset-x-0 w-full h-12 z-10 cursor-pointer opacity-0"
                />
                <div className="h-12 w-full pl-5 flex items-center peer">
                  <h1 className="text-gray-700 font-semibold">
                    {t("faq.buyingQuestions.1.Q")}
                  </h1>
                </div>

                {/* Arrow Icon */}
                <div className="absolute top-4 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                  <IoIosArrowDown className="text-gray-700" />
                </div>

                {/* Content  */}
                <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
                  <div className="p-4">
                    <p className="text-gray-400">
                      {t("faq.buyingQuestions.1.A")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative w-full overflow-hidden border rounded-md py-1">
                <input
                  type="checkbox"
                  defaultChecked={true}
                  className="peer absolute top-0 inset-x-0 w-full h-12 z-10 cursor-pointer opacity-0"
                />
                <div className="h-12 w-full pl-5 flex items-center peer">
                  <h1 className="text-gray-700 font-semibold peer-checked:text-blue-500 text-lg">
                    {t("faq.buyingQuestions.2.Q")}
                  </h1>
                </div>

                {/* Arrow Icon */}
                <div className="absolute top-4 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                  <IoIosArrowDown className="text-gray-700" />
                </div>

                {/* Content  */}
                <div className="bg-white overflow-hidden transition-all duration-500 max-h-40 peer-checked:max-h-0">
                  <div className="p-4">
                    <p className="text-gray-400">
                      {t("faq.buyingQuestions.2.A")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative w-full overflow-hidden border rounded-md py-1">
                <input
                  type="checkbox"
                  defaultChecked={true}
                  className="peer absolute top-0 inset-x-0 w-full h-12 z-10 cursor-pointer opacity-0"
                />
                <div className="h-12 w-full pl-5 flex items-center peer">
                  <h1 className="text-gray-700 font-semibold peer-checked:text-blue-500 text-lg">
                    {t("faq.buyingQuestions.3.Q")}
                  </h1>
                </div>

                {/* Arrow Icon */}
                <div className="absolute top-4 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                  <IoIosArrowDown className="text-gray-700" />
                </div>

                {/* Content  */}
                <div className="bg-white overflow-hidden transition-all duration-500 max-h-40 peer-checked:max-h-0">
                  <div className="p-4">
                    <p className="text-gray-400">
                      {t("faq.buyingQuestions.3.A")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative w-full overflow-hidden border rounded-md py-1">
                <input
                  type="checkbox"
                  defaultChecked={true}
                  className="peer absolute top-0 inset-x-0 w-full h-12 z-10 cursor-pointer opacity-0"
                />
                <div className="h-12 w-full pl-5 flex items-center peer">
                  <h1 className="text-gray-700 font-semibold peer-checked:text-blue-500 text-lg">
                    {t("faq.buyingQuestions.4.Q")}
                  </h1>
                </div>

                {/* Arrow Icon */}
                <div className="absolute top-4 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                  <IoIosArrowDown className="text-gray-700" />
                </div>

                {/* Content  */}
                <div className="bg-white overflow-hidden transition-all duration-500 max-h-40 peer-checked:max-h-0">
                  <div className="p-4">
                    <p className="text-gray-400">
                      {t("faq.buyingQuestions.4.A")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          )}
        </div>
      </div>
    </section>
    </div>
  );
};

export default FAQ;
