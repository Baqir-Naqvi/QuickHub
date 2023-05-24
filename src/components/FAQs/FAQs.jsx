import React from "react";
import FAQ from "./FAQ";
import { faqData1 } from "./data";

const Faqs = () => {
	return (

		<section className="faqs-section"
    style={{marginBlock:"100px"}}
    >
			<div className="container">
				<div className="faq-wrap">
					<h4 className="toptitle">
						<span className="d-none d-sm-block">Frequently Ask Questions</span>
						<span className="d-sm-none">Frequently Ask Questions</span>
					</h4>
					<FAQ data={
					faqData1
					} id="frequenty" />
				</div>
			</div>
			
		</section>
	);
};

export default Faqs;




/*


			<div className="faq-qck-txt">
					<span id="more-txt" className="target-id"></span>
					{data.length>0?data[0]?.fields["descrizioneHotel"]:`
					Lorem ipsum dolor sit amet consectetur adipiscing elit primis,
					nostra nulla tellus sagittis turpis maecenas duis feugiat nibh,
					fames porttitor faucibus elementum sollicitudin iaculis mauris.
					Sodales integer cubilia est ultricies vivamus potenti enim
					faucibus, porttitor rhoncus ad cursus interdum rutrum aenean
					velit, quis aliquam convallis posuere primis Lorem ipsum dolor
					sit amet consectetur adipiscing elit primis, nostra nulla tellus
					sagittis turpis maecenas duis feugiat nibh, fames porttitor
					faucibus elementum sollicitudin iaculis mauris. Sodales integer
					cubilia est ultricies vivamus potenti enim faucibus, porttitor
					rhoncus ad cursus interdum rutrum aenean velit, quis aliquam
					convallis posuere primis fames porttitor faucibus elementum
					sollicitudin iaculis mauris. Sodales integer cubilia est
					ultricies vivamus potenti enim faucibus, porttitor rhoncus ad
					cursus interdum rutrum aenean velit, quis aliquam convallis
					posuere primis is feugiat nibh, fames porttitor faucibus
					elementum sollicitudin iaculis mauris. Sodales integer cubilia
					est ultricies vivamus potenti enim faucibus, porttitor rhoncus ad
					cursus interdum rutrum aenean velit, quis aliquam convallis
					posuere primis Lorem ipsum dolor sit amet consectetur adipiscing
					elit primis, nostra nulla tellus sagittis turpis maecenas duis
					feugiat nibh, fames porttitor faucibus elementum sollicitudin
					iaculis mauris. Sodales integer cubilia est ultricies vivamus
					potenti enim faucibus, porttitor rhoncus ad cursus interdum
					rutrum aenean velit, quis aliquam convallis posuere primis fames
					porttitor faucibus elementum sollicitudin iaculis mauris. Sodales
					integer cubilia est ultricies vivamus potenti enim faucibus,
					porttitor rhoncus ad cursus interdum rutrum aenean velit, quis
					aliquam convallis posuere primis`}
				</div>
				<h4 className="frequent-title p-0 border-0 mb-3">
					<span className="text-base">
						Dettagli Struttura {data.length>0?data[0]?.fields["nomeHotel"]:""}
					</span>
				</h4>
				<div className="color-base">
					<FaqItems data={
						data.length>0?faqData2Fetch:faqData2
					} id="icon-style" />
				</div>

*/