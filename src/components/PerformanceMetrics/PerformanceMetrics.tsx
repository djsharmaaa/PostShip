import React from 'react';
import './PerformanceMetrics.css';
import { BlockStack, Box, Button, ButtonGroup, Card, InlineGrid, InlineStack, Text } from '@shopify/polaris';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Title, ArcElement, Legend } from 'chart.js';

interface PlaceholderProps {
    background: string;
}

const Placeholder: React.FC<PlaceholderProps> = ({ background }) => {
    return (
        <div
            style={{
                background,
                padding: '6px 10px',
                borderRadius: '7px',
            }}
        />
    );
};

ChartJS.register(
    Tooltip, Title, ArcElement, Legend
);

const data = {
    datasets: [{
        data: [63, 102, 52, 105, 59],
        backgroundColor: [
            '#956F00',
            '#5E4200',
            '#FFDDB6',
            '#FFC879',
            '#E5A500',
        ]
    }],
};

const PerformanceMetrics: React.FC = () => {
    return (
        <div className='perf-container'>
            <div className='perf-section-container'>
                <p className='perf-title'>Instant Dive into Your Performance Metrics</p>
                <div className='menu-button'>
                    <div style={{ padding: '10px', backgroundColor: '#F8F7FF', borderRadius: '4px', border: '1px solid #8051FF' }}>
                        <Text fontWeight='semibold' as="p">
                            Lifetime
                        </Text>
                    </div>
                    <div style={{ padding: '10px', backgroundColor: 'white', borderRadius: '4px' }}>
                        <Text fontWeight='semibold' as="p">
                            Last Week
                        </Text>
                    </div>
                    <div style={{ padding: '10px', backgroundColor: 'white', borderRadius: '4px' }}>
                        <Text fontWeight='semibold' as="p">
                            Last Week
                        </Text>
                    </div>
                    <div style={{ padding: '10px', backgroundColor: 'white', borderRadius: '4px' }}>
                        <Text fontWeight='semibold' as="p">
                            Last Year
                        </Text>
                    </div>
                    <div style={{ padding: '10px', backgroundColor: 'white', borderRadius: '4px' }}>
                        <Text fontWeight='semibold' as="p">
                            <div style={{ display: 'flex', justifyContent:  'space-between' ,alignItems: 'center', gap: '5px' }}>
                                Customize Time Line
                               
                                <img  src='/images/icon2.png' alt='icon2'/>
                            </div>
                        </Text>
                    </div>
                </div>
                <div className='perf-card-container'>
                    <div className='perf-left-card'>
                        <Card roundedAbove="sm" padding="500">
                            <BlockStack gap="200">
                                <InlineGrid columns="1fr auto">
                                    <Text as="h2" variant="headingSm">
                                        Shipment Updates
                                    </Text>
                                    <Text as="p">Total Orders: 394</Text>
                                </InlineGrid>
                                <div className='card-menu-buttons'>
                                    <div className='card-menu-button' style={{ backgroundColor: '#FFF1E3' }}>
                                        <Text fontWeight='semibold' as="p">
                                            Delivered
                                        </Text>
                                    </div>
                                    <div className='card-menu-button'>
                                        <Text fontWeight='semibold' as="p">
                                            Out for delivery
                                        </Text>
                                    </div>
                                    <div className='card-menu-button'>
                                        <Text fontWeight='semibold' as="p">
                                            Intransit
                                        </Text>
                                    </div>
                                    <div className='card-menu-button'>
                                        <Text fontWeight='semibold' as="p">
                                            Pending
                                        </Text>
                                    </div>
                                    <div className='card-menu-button'>
                                        <Text fontWeight='semibold' as="p">
                                            Exception
                                        </Text>
                                    </div>
                                </div>
                                <div className='doughnut-chart'>
                                    <Doughnut
                                        data={data}
                                    />
                                </div>
                                <div className='card-footer-items'>
                                    <div className='upper-items'>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
                                            <Box>
                                                <Placeholder background='#5E4200' />
                                            </Box>
                                            <Text as="p">Exception</Text>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
                                            <Box>
                                                <Placeholder background='#956F00' />
                                            </Box>
                                            <Text as="p">Intransit</Text>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
                                            <Box>
                                                <Placeholder background='#E5A500' />
                                            </Box>
                                            <Text as="p">Pending</Text>
                                        </div>
                                    </div>
                                    <div className='below-items'>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
                                            <Box>
                                                <Placeholder background='#FFC879' />
                                            </Box>
                                            <Text as="p">Delivered</Text>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
                                            <Box>
                                                <Placeholder background='#FFDDB6' />
                                            </Box>
                                            <Text as="p">Out for delivery</Text>
                                        </div>
                                    </div>
                                </div>
                            </BlockStack>
                        </Card>
                    </div>
                    <div className='perf-middle-card'>
                        <Card roundedAbove="sm" background='bg-fill-warning-active'>
                            <BlockStack gap="800">
                                <Text as="p" variant="headingSm">
                                    Star Facts about your orders!!!
                                </Text>
                                <BlockStack>
                                    <Text as="p" variant="headingSm" fontWeight="regular">
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontWeight: '400' }}>
                                            <span>There are 8 shipments that have been in out for delivery for more than 3 days.</span>
                                            <br />
                                            <span>There are 5 shipments in exception right now</span>
                                            <br />
                                            <span>The maximum chargebacks are from Miami.</span>
                                        </div>
                                    </Text>
                                    <img src='/images/Ellipse.svg' alt='Ellipse' className='ellipse-img' />
                                </BlockStack>
                                <InlineStack align="start">
                                    <ButtonGroup>
                                        <Button variant="secondary">Check Orders Page</Button>
                                    </ButtonGroup>
                                </InlineStack>
                            </BlockStack>
                        </Card>
                    </div>
                    <div className='perf-right-card'>
                        <Card roundedAbove="sm">
                            <BlockStack gap="600">
                                <Text as="h2" variant="headingSm">
                                    Tracking Page Views Vs Orders
                                </Text>
                                <BlockStack>
                                    <Text as="p" variant="headingSm" fontWeight="regular">
                                        Understand user engagement patterns and optimize your tracking page for enhanced customer experiences.
                                    </Text>
                                </BlockStack>
                                <Card roundedAbove="sm" padding="500" background='bg-surface-warning-hover'>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <div>
                                            <Text as="h2" variant="headingSm">
                                                Orders
                                            </Text>
                                            <Text as="h2" variant="heading3xl">
                                                80
                                            </Text>
                                        </div>
                                        <div>
                                        <img src='/images/Icon.png' alt='icon'/>
                                           
                                        </div>
                                    </div>
                                </Card>
                                <Card roundedAbove="sm" padding="500" background='bg-fill-warning-hover'>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <div>
                                            <Text as="h2" variant="headingSm">
                                                Tracking Page Views
                                            </Text>
                                            <Text as="h2" variant="heading3xl">
                                                44
                                            </Text>
                                        </div>
                                        <div>
                                       
                                            <img src='/images/View.png' alt='view'/>
                                        </div>
                                    </div>
                                </Card>
                            </BlockStack>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PerformanceMetrics;


