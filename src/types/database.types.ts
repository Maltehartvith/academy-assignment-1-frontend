export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
  public: {
    Tables: {
      article: {
        Row: {
          author: string | null;
          description: string | null;
          id: number;
          picture: Json | null;
          tags: Json | null;
        };
        Insert: {
          author?: string | null;
          description?: string | null;
          id?: number;
          picture?: Json | null;
          tags?: Json | null;
        };
        Update: {
          author?: string | null;
          description?: string | null;
          id?: number;
          picture?: Json | null;
          tags?: Json | null;
        };
      };
      ios_subscription: {
        Row: {
          auto_renew_product_id: string | null;
          expires_date_ms: string;
          id: string;
          original_transaction_id: string;
          product_id: string | null;
          will_auto_renew: boolean;
        };
        Insert: {
          auto_renew_product_id?: string | null;
          expires_date_ms: string;
          id?: string;
          original_transaction_id: string;
          product_id?: string | null;
          will_auto_renew: boolean;
        };
        Update: {
          auto_renew_product_id?: string | null;
          expires_date_ms?: string;
          id?: string;
          original_transaction_id?: string;
          product_id?: string | null;
          will_auto_renew?: boolean;
        };
      };
      permission: {
        Row: {
          id: string;
          name: string;
        };
        Insert: {
          id?: string;
          name: string;
        };
        Update: {
          id?: string;
          name?: string;
        };
      };
      product_description: {
        Row: {
          name: string;
          product_id: string;
        };
        Insert: {
          name: string;
          product_id: string;
        };
        Update: {
          name?: string;
          product_id?: string;
        };
      };
      profile: {
        Row: {
          age: number;
          first_name: string;
          id: string;
          last_name: string;
        };
        Insert: {
          age: number;
          first_name: string;
          id?: string;
          last_name: string;
        };
        Update: {
          age?: number;
          first_name?: string;
          id?: string;
          last_name?: string;
        };
      };
      profile_role_junction: {
        Row: {
          profile_fk: string;
          role_fk: string;
        };
        Insert: {
          profile_fk: string;
          role_fk: string;
        };
        Update: {
          profile_fk?: string;
          role_fk?: string;
        };
      };
      role: {
        Row: {
          id: string;
          name: string;
        };
        Insert: {
          id?: string;
          name: string;
        };
        Update: {
          id?: string;
          name?: string;
        };
      };
      role_permission_junction: {
        Row: {
          permission_fk: string;
          role_fk: string;
        };
        Insert: {
          permission_fk: string;
          role_fk: string;
        };
        Update: {
          permission_fk?: string;
          role_fk?: string;
        };
      };
      stripe_subscription: {
        Row: {
          billing_cycle_anchor: string;
          cancel_at: string | null;
          cancel_at_period_end: boolean;
          canceled_at: string | null;
          created: string;
          currency: string;
          current_period_end: string;
          current_period_start: string;
          customer: string;
          ended_at: string | null;
          id: string;
          product: string | null;
          start_date: string;
          status: Database['public']['Enums']['stripe_subscription_status_enum'];
        };
        Insert: {
          billing_cycle_anchor: string;
          cancel_at?: string | null;
          cancel_at_period_end: boolean;
          canceled_at?: string | null;
          created: string;
          currency: string;
          current_period_end: string;
          current_period_start: string;
          customer: string;
          ended_at?: string | null;
          id: string;
          product?: string | null;
          start_date: string;
          status: Database['public']['Enums']['stripe_subscription_status_enum'];
        };
        Update: {
          billing_cycle_anchor?: string;
          cancel_at?: string | null;
          cancel_at_period_end?: boolean;
          canceled_at?: string | null;
          created?: string;
          currency?: string;
          current_period_end?: string;
          current_period_start?: string;
          customer?: string;
          ended_at?: string | null;
          id?: string;
          product?: string | null;
          start_date?: string;
          status?: Database['public']['Enums']['stripe_subscription_status_enum'];
        };
      };
      subscription_notification: {
        Row: {
          id: string;
          ios_subscription_fk: string | null;
          subtype: string | null;
          timestamp: string;
          type: string;
        };
        Insert: {
          id?: string;
          ios_subscription_fk?: string | null;
          subtype?: string | null;
          timestamp: string;
          type: string;
        };
        Update: {
          id?: string;
          ios_subscription_fk?: string | null;
          subtype?: string | null;
          timestamp?: string;
          type?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      stripe_subscription_status_enum: 'incomplete' | 'incomplete_expired' | 'trialing' | 'active' | 'past_due' | 'canceled' | 'unpaid';
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
