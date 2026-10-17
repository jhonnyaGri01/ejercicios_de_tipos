// 3. Sistema de notificaciones (unión discriminada + type narrowing)

export interface NotificacionEmail {
  tipo: "email";
  destinatario: string;
  asunto: string;
  cuerpo: string;
}

export interface NotificacionSMS {
  tipo: "sms";
  telefono: string;
  mensaje: string;
}

export interface NotificacionPush {
  tipo: "push";
  dispositivoId: string;
  titulo: string;
  contenido: string;
}

export type Notificacion = NotificacionEmail | NotificacionSMS | NotificacionPush;

export class ServicioNotificaciones {
  static enviarNotificacion(n: Notificacion): string {
    switch (n.tipo) {
      case "email":
        return `📧 Email a ${n.destinatario} | Asunto: ${n.asunto}`;
      case "sms":
        return `📱 SMS al ${n.telefono}: ${n.mensaje}`;
      case "push":
        return `🔔 Push a ${n.dispositivoId}: ${n.titulo} - ${n.contenido}`;
    }
  }
}
