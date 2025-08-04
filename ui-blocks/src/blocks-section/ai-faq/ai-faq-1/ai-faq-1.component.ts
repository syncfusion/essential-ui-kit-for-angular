import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule, AccordionComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-ai-faq-1',
    standalone: true,
    imports: [CommonModule, AccordionModule],
    templateUrl: './ai-faq-1.component.html',
    styleUrl: './ai-faq-1.component.css'
})
export class AiFaq1Component implements OnInit, OnDestroy {
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    @ViewChild('accordion') public accordion!: AccordionComponent;
    /* SB Code - End */

    constructor() { }

    public ngOnInit(): void {
        /* SB Code - Start */
        window.addEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    /* SB Code - Start */
    public ngAfterViewInit(): void {
        setTimeout(() => {
            this.accordion.refresh();
        }, 1000);
    }
    /* SB Code - End */

    public ngOnDestroy(): void {
        /* SB Code - Start */
        window.removeEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    public FAQData: any[] = [
        {
            id: 1,
            question: 'What do we do?',
            answer: 'We are designed to assist you with [specific tasks or functions], provide information, and enhance your overall experience by offering support through conversational interactions.'
        },
        {
            id: 2,
            question: 'How do I get started with Fusion AI?',
            answer: 'To get started with Fusion AI, sign up for an account on our website. Once registered, follow the onboarding guide to set up your workspace, connect your tools, and explore the dashboard.'
        },
        {
            id: 3,
            question: 'How do I install Fusion AI?',
            answer: 'Fusion AI is a cloud-based platform, so no installation is required. Simply log in through your browser. For integrations, follow the setup instructions in the "Integrations" tab.'
        },
        {
            id: 4,
            question: 'What is the messenger in Fusion AI?',
            answer: 'The messenger is a real-time communication tool that allows you to chat with customers, team members, or support agents directly within the platform.'
        },
        {
            id: 5,
            question: 'What is the next-gen inbox?',
            answer: 'The next-gen inbox consolidates all your messages, tickets, and notifications into a single, streamlined interface, making it easier to manage conversations and tasks.'
        },
        {
            id: 6,
            question: 'How do tickets work?',
            answer: 'Tickets are used to track customer issues or internal tasks. You can create, assign, prioritize, and resolve tickets through the support dashboard.'
        },
        {
            id: 7,
            question: 'How does support work?',
            answer: 'Fusion AI offers 24/7 support through live chat, email, and a comprehensive help center. You can also submit tickets for more complex issues.'
        },
        {
            id: 8,
            question: 'How does billing work?',
            answer: 'Billing is handled monthly or annually based on your subscription plan. You can view invoices, update payment methods, and manage your plan in the billing section.'
        },
        {
            id: 9,
            question: 'How do I cancel my subscription?',
            answer: 'To cancel your subscription, go to the billing settings and click on "Cancel Plan." Your access will remain active until the end of the billing cycle.'
        },
        {
            id: 10,
            question: 'How do I integrate this with other tools?',
            answer: 'Fusion AI supports integrations with popular tools like Slack, Zapier, and CRMs. Visit the "Integrations" page to connect and configure them.'
        },
        {
            id: 11,
            question: 'What are the pricing plans for the Fusion AI?',
            answer: 'We offer flexible pricing plans including Free, Pro, and Enterprise tiers. Each plan comes with different features and usage limits. Visit our pricing page for full details.'
        }
    ];

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'ai-faq-1' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                    setTimeout(() => {
                        this.accordion.refresh();
                    }, 1000);
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
