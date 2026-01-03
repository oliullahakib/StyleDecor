import React from 'react'
import MyDiv from '../../../components/MyDiv'
import SectionTitle from '../../Shared/SectionTitle'

const FAQSection = () => {
    return (
        <MyDiv className={'my-5'}>
            <SectionTitle className={'text-center my-8'} title="Frequently Asked Questions(FAQ)"/>
            {/* question 1  */}
            <div className="bg-base-100 border-base-300 collapse border">
                <input type="checkbox" className="peer" />
                <div
                    className="collapse-title  text-primary-content  "
                >
                  How does the booking process work for a decoration service?
                </div>
                <div
                    className="collapse-content  text-primary-conteent  "
                >
                   Booking with StyleDecor is simple! First, browse our available decoration packages on the Services Page. Once you find a style you love, click "Book Now" to select your preferred date and time. You can check decorator availability and make a secure payment via Stripe. Once confirmed, you can track the status of your service directly from your dashboard.
                </div>
            </div>
            {/* question 2  */}
            <div className="bg-base-100 border-base-300 collapse border">
                <input type="checkbox" className="peer" />
                <div
                    className="collapse-title  text-primary-content  "
                >
                   Can I track the progress of my on-site decoration service?
                </div>
                <div
                    className="collapse-content  text-primary-conteent  "
                >
                  Yes! We believe in complete transparency. Once an admin assigns a decorator to your project, you can track the real-time status in your User Dashboard. You will see updates through every stage: Assigned → Planning Phase → Materials Prepared → On the Way → Setup in Progress → Completed.
                </div>
            </div>
            {/* question 3  */}
            <div className="bg-base-100 border-base-300 collapse border">
                <input type="checkbox" className="peer" />
                <div
                    className="collapse-title  text-primary-content  "
                >
                    Is it possible to cancel or reschedule my booking?
                </div>
                <div
                    className="collapse-content  text-primary-conteent  "
                >
                  We understand plans can change. You can manage your appointments directly from the "My Bookings" section in your dashboard. You can cancel or request a reschedule depending on the current status of the project. Please note that cancellation policies may apply if the "Materials Prepared" phase has already begun.
                </div>
            </div>
            {/* question 4  */}
            <div className="bg-base-100 border-base-300 collapse border">
                <input type="checkbox" className="peer" />
                <div
                    className="collapse-title  text-primary-content  "
                >
                  How do I know if StyleDecor provides services in my area?
                </div>
                <div
                    className="collapse-content  text-primary-conteent  "
                >
                We currently serve specific regions for on-site decoration. You can verify if your location is within our service range by visiting our Service Coverage Map page. If you are outside our immediate zone, please contact us for a custom consultation.
                </div>
            </div>
            {/* question 5  */}
            <div className="bg-base-100 border-base-300 collapse border">
                <input type="checkbox" className="peer" />
                <div
                    className="collapse-title  text-primary-content  "
                >
                   Are online payments on StyleDecor secure?
                </div>
                <div
                    className="collapse-content  text-primary-conteent  "
                >
                Absolutely. Your security is our top priority. We use Stripe, a globally trusted payment gateway, to process all transactions. We do not store your sensitive card information on our servers; everything is handled securely through Stripe's encrypted infrastructure.
                </div>
            </div>
           
        </MyDiv>
    )
}

export default FAQSection

