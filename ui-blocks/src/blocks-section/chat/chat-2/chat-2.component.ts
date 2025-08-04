import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';

@Component({
    selector: 'app-chat-2',
    standalone: true,
    imports: [CommonModule, ListViewModule, ButtonModule, DropDownButtonModule, TextBoxModule],
    templateUrl: './chat-2.component.html',
    styleUrl: './chat-2.component.css'
})
export class Chat2Component implements OnInit, OnDestroy {
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */

    constructor() { }

    public ngOnInit(): void {
        /* SB Code - Start */
        window.addEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    public ngOnDestroy(): void {
        /* SB Code - Start */
        window.removeEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    public data: Object[] = [
        {
            id: 1,
            name: "John",
            time: "8:57 AM",
            avatar: "",
            text: "Hi, I'm having trouble accessing the company VPN.",
            chat: "sender",
            open: false
        },
        {
            id: 2,
            name: "Mark Davis",
            time: "9:00 AM",
            avatar: "avatar-3.jpg",
            text: "Hello! I can help with that. Are you seeing any error messages?",
            chat: "receiver"
        },
        {
            id: 1,
            name: "John",
            time: "9:05 AM",
            avatar: "",
            text: 'Yes, it says "VPN connection failed. Authentication error."',
            chat: "sender",
            open: false
        },
        {
            id: 2,
            name: "Mark Davis",
            time: "10:00 AM",
            avatar: "avatar-3.jpg",
            text: "Thanks for the details. Can you confirm if you've recently changed your network password?",
            chat: "receiver"
        },
        {
            id: 1,
            name: "John",
            time: "10:32 AM",
            avatar: "",
            text: "Yes, I changed it yesterday.",
            chat: "sender",
            open: true
        },
        {
            id: 2,
            name: "Mark Davis",
            time: "10:35 AM",
            avatar: "avatar-3.jpg",
            text: "That's likely the issue. The VPN might still be using the old password. Try updating your VPN credentials with the new password.",
            chat: "receiver"
        }
    ];

    public dataTranslate: Object[] = [
        {
            id: 1,
            name: "Olivia Martinez",
            time: "8:57 AM",
            avatar: "avatar-10.jpg",
            text: "Hola, tengo problemas para acceder a la VPN de la empresa.",
            chat: "sender"
        },
        {
            id: 2,
            name: "Mark Davis",
            time: "9:00 AM",
            avatar: "avatar-3.jpg",
            text: "¡Hola! Puedo ayudar con eso. ¿Estás viendo algún mensaje de error?",
            chat: "receiver"
        },
        {
            id: "1",
            name: "Olivia Martinez",
            time: "9:05 AM",
            avatar: "avatar-10.jpg",
            text: 'Sí, dice "Error en la conexión VPN. Error de autenticación."',
            chat: "sender"
        },
        {
            id: 2,
            name: "Mark Davis",
            time: "10:00 AM",
            avatar: "avatar-3.jpg",
            text: "Gracias por los detalles. ¿Puedes confirmar si has cambiado recientemente tu contraseña de red?",
            chat: "receiver"
        },
        {
            id: 1,
            name: "Olivia Martinez",
            time: "10:32 AM",
            avatar: "avatar-10.jpg",
            text: "Sí, lo cambié ayer.",
            chat: "sender"
        },
        {
            id: 2,
            name: "Mark Davis",
            time: "10:35 AM",
            avatar: "avatar-3.jpg",
            text: "Probablemente ese sea el problema. Es posible que la VPN todavía esté usando la contraseña anterior. Intente actualizar sus credenciales de VPN con la nueva contraseña.",
            chat: "receiver"
        }
    ];

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'chat-2' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}