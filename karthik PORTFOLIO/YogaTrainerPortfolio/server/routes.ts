import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint for contact form
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ 
          message: 'All fields are required' 
        });
      }
      
      // Validate email format
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          message: 'Invalid email format' 
        });
      }
      
      // Save message to storage
      const contactMessage = await storage.createContactMessage({
        name,
        email,
        subject,
        message,
        createdAt: new Date().toISOString()
      });
      
      return res.status(201).json({ 
        message: 'Message sent successfully',
        data: contactMessage
      });
    } catch (error) {
      console.error('Error sending message:', error);
      return res.status(500).json({ 
        message: 'Failed to send message. Please try again later.' 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
