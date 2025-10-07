import { Component } from "@angular/core";
import { ChartConfiguration } from "chart.js";
import { BaseChartDirective } from "ng2-charts";
import { HeaderIndicatorPageComponent } from "../../shared/components/header-indicator-page/header-indicator-page.component";

@Component({
    selector: "app-home-page",
    templateUrl: "home.html",
    styleUrl: "home.scss",
    imports: [BaseChartDirective, HeaderIndicatorPageComponent]
})

export class AppHomePage { 
    chartType: ChartConfiguration<'line'>['type'] = 'line';

  chartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'],  
    datasets: [
        {
            data: [55, 63, 60, 65, 60, 64, 60],
            label: 'Vendas 2025',
            fill: true,
            borderColor: '#00266d',
            tension: 0.5,
            borderWidth: 2
        }
      ],
    };
    

    chartOptions: ChartConfiguration<'line'>['options'] = {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
            tooltip: { enabled: false },
            legend: { display: false }
        },
        elements: {
            point: {
                borderWidth: 2,
                radius: 4,     
                backgroundColor: "#FFFFFF"  
            }
        },
        scales: {
            x: {
                ticks: {
                    font: { size: 14 }
                },
                grid: {
                    display: false,
                }
            },
            y: {
                min: 50,
                 max: 68,
                ticks: {
                    font: { size: 14 },
                    stepSize: 5,
                }
            }
        }
    };


    chartProduct: ChartConfiguration<'polarArea'>['data'] = {
        labels: [
        ],

        datasets: [{
            label: 'My First Dataset',
            data: [11, 16, 7, 3, 14],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)'
            ]
        }]
    };

    chartProfile: ChartConfiguration<'polarArea'>['data'] = {
        labels: [
        ],

        datasets: [{
            label: 'My First Dataset',
            data: [8, 10, 12, 15, 2],
            backgroundColor: [
                'rgb(25, 199, 32)',
                'rgb(125, 92, 192)',
                'rgb(255, 205, 186)',
                'rgb(201, 203, 207)',
                'rgb(154, 162, 35)'
            ]
        }]
    };

     chartOrd: ChartConfiguration<'polarArea'>['data'] = {
        labels: [
        ],

        datasets: [{
            label: 'My First Dataset',
            data: [11, 5, 11, 8, 2],
            backgroundColor: [
                'rgb(125, 199, 32)',
                'rgb(25, 392, 192)',
                'rgb(255, 105, 186)',
                'rgb(201, 203, 07)',
                'rgb(54, 62, 135)'
            ]
        }]
    };

    chartProductOptions: ChartConfiguration<'polarArea'>['options'] = {
        responsive: true,
        maintainAspectRatio: false,

         scales: {
            
        }
    }
}