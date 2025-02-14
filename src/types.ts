export interface IAlert {
  id: number;
  event: {
    name: string;
    image: string;
    start: string;
    end: string | null;
    venue_name: string;
    city: string;
    state: string;
  }
  quantity: number;
  requests: number;
  reserved: boolean;
  all_ga: boolean;
  ga_sections: string[] | null;
}
