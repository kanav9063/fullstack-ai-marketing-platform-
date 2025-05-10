"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { CalendarDays, Users, Target, TrendingUp } from "lucide-react";

const campaigns = [
  {
    title: "UCSB Welcome Week Special",
    description:
      "Special promotion targeting new students during the first week of fall quarter",
    strategy: [
      "20% discount for all UCSB students",
      "Social media campaign on Instagram and TikTok",
      "Collaboration with UCSB student organizations",
      "Welcome gift for first-time visitors",
    ],
    metrics: {
      reach: "5,000+ students",
      engagement: "25% conversion rate",
      roi: "3.5x return on ad spend",
    },
    timing: "September 2024",
    type: "Seasonal",
  },
  {
    title: "Finals Week Fuel",
    description:
      "Supporting students during exam periods with special offers and extended hours",
    strategy: [
      "Late night study hours with special menu",
      "Student group order discounts",
      "Free coffee with any meal purchase",
      "Social media contest for study groups",
    ],
    metrics: {
      reach: "3,000+ students",
      engagement: "40% repeat customers",
      roi: "2.8x return on investment",
    },
    timing: "December 2024",
    type: "Academic",
  },
  {
    title: "Gaucho Game Day",
    description: "Promotions aligned with UCSB sports events and victories",
    strategy: [
      "Post-game victory discounts",
      "Team spirit menu items",
      "Sports viewing parties",
      "Athletic department partnerships",
    ],
    metrics: {
      reach: "2,500+ students",
      engagement: "35% social sharing",
      roi: "2.5x return on investment",
    },
    timing: "Ongoing",
    type: "Sports",
  },
];

export function MarketingCampaigns() {
  return (
    <div className="py-12 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-orange-800 mb-4">
            Proven Marketing Campaigns
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Successful campaign examples specifically designed for the UCSB
            student market, with real metrics and implementation strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign) => (
            <Card
              key={campaign.title}
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-bold text-orange-900">
                    {campaign.title}
                  </CardTitle>
                  <Badge variant="secondary">{campaign.type}</Badge>
                </div>
                <p className="text-gray-600 mt-2">{campaign.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold flex items-center gap-2 text-orange-800">
                      <Target className="h-4 w-4" />
                      Strategy
                    </h4>
                    <ul className="mt-2 space-y-2">
                      {campaign.strategy.map((point, index) => (
                        <li key={index} className="text-gray-600 text-sm">
                          • {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold flex items-center gap-2 text-orange-800 mb-3">
                      <TrendingUp className="h-4 w-4" />
                      Performance Metrics
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Reach</p>
                        <p className="font-medium">{campaign.metrics.reach}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Engagement</p>
                        <p className="font-medium">
                          {campaign.metrics.engagement}
                        </p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-sm text-gray-500">ROI</p>
                        <p className="font-medium">{campaign.metrics.roi}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t pt-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <CalendarDays className="h-4 w-4" />
                      <span className="text-sm">{campaign.timing}</span>
                    </div>
                    <Button
                      variant="outline"
                      className="text-orange-600 hover:text-orange-700"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
