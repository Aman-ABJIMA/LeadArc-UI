import 'primeicons/primeicons.css';
import '../dashboard/DashboardComponet.css'
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Terminal } from 'primereact/terminal';
import { TerminalService } from 'primereact/terminalservice';
import { ProgressSpinner } from 'primereact/progressspinner';

const DashboardComponent = () => {
    const data = [
        { CampaignName: 'cvr test', Total: 1000, Sent: 950, Delivered: 900, Opened: 800, Clicked: 700, Failed: 50 },
        { CampaignName: 'cvm test', Total: 2000, Sent: 1900, Delivered: 1800, Opened: 1700, Clicked: 1600, Failed: 100 },
        { CampaignName: 'nitesh', Total: 1500, Sent: 1400, Delivered: 1350, Opened: 1250, Clicked: 1150, Failed: 50 },
    ];
    const emailTemplates = [
        { TemplateName: 'CVR Test' },
        { TemplateName: 'CVM Test' },
        { TemplateName: 'CV Test' }
    ];
    const responsiveGridText = 'text-white white-space-nowrap overflow-hidden text-overflow-ellipsis text-xs sm:text-xs lg:text-base md:text-sm';
    const responsiveStats = 'p-1 h-full font-bold text-white text-xl sm:text-xl lg:text-3xl md:text-2xl';

    const [emailCampaigns, setEmailCampaignsData] = useState([]);
    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;

    useEffect(() => {
        setEmailCampaignsData(data);
    }, []);


    /*Terminal Code starts from here*/
    let state = {
        currentCommand: null,
        emailMessage: null
    };
    const commandHandler = (text) => {
        let response;
        let argsIndex = text.indexOf(' ');
        let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

        switch (command.toUpperCase()) {
            case 'EMAIL':
                response = `Please choose a template: ${emailTemplates.map(a => a.TemplateName).join('\n')}`;
                break;

            case 'SMS':
                response = '';
                break;

            case 'FAX':
                response = '';
                break;

            case 'CLEAR':
                response = null;
                break;

            default:
                response = 'Unknown command: ' + command;
                break;
        }

        if (response)
            TerminalService.emit('response', response);
        else
            TerminalService.emit('clear');
    };

    useEffect(() => {
        TerminalService.on('command', commandHandler);

        return () => {
            TerminalService.off('command', commandHandler);
        };
    }, []);
    /*Terminal Code Ends Here*/
    return (
        <div className=''>
            <div className="grid mt-3">
                <div className="col-12 md:col-6 lg:col-3">
                    <div className="p-3 bg-gray-300 border-round-xl shadow-5 font-bold">
                        <div className='flex justify-content-between m-1'>
                            <strong className={responsiveGridText}>Email Sent</strong>
                            <i className='pi pi-send text-lg font-bold text-white' />
                        </div>
                        <div className='flex justify-content-between'>
                            <strong className={responsiveStats}>1548</strong>
                            <ProgressSpinner style={{ width: '25px', height: '25px' }} strokeWidth="10" fill="transparent" animationDuration="2s" className="custom-spinner" />
                        </div>
                    </div>
                </div>
                <div className="col-12 md:col-6 lg:col-3 zoominright  animation-duration-500 animation-iteration-1">
                    <div className="p-3 bg-yellow-500 border-round-xl shadow-5 font-bold">
                        <div className='flex justify-content-between m-1'>
                            <strong className={responsiveGridText}>Email Clicked</strong>
                            <i className='pi pi-thumbs-up text-lg font-bold text-white' />
                        </div>
                        <div className='flex justify-content-between'>
                            <strong className={responsiveStats}>457</strong>
                            <ProgressSpinner style={{ width: '25px', height: '25px' }} strokeWidth="10" fill="transparent" animationDuration="2s" className="custom-spinner" />
                        </div>
                    </div>
                </div>
                <div className="col-12 md:col-6 lg:col-3">
                    <div className="p-3 bg-blue-500 border-round-xl shadow-5 font-bold">
                        <div className='flex justify-content-between m-1'>
                            <strong className={responsiveGridText}>Email Opened</strong>
                            <i className='pi pi-envelope text-lg font-bold text-white' />
                        </div>
                        <div className='flex justify-content-between'>
                            <strong className={responsiveStats}>154</strong>
                            <ProgressSpinner style={{ width: '25px', height: '25px' }} strokeWidth="10" fill="transparent" animationDuration="2s" className="custom-spinner" />
                        </div>
                    </div>
                </div>
                <div className="col-12 md:col-6 lg:col-3 zoominleft  animation-duration-500 animation-iteration-1">
                    <div className="p-3 bg-red-600 border-round-xl shadow-5 font-bold">
                        <div className='flex justify-content-between m-1'>
                            <strong className={responsiveGridText}>Email Spam</strong>
                            <i className='pi pi-info-circle text-lg font-bold text-white' />
                        </div>
                        <div className='flex justify-content-between'>
                            <strong className={responsiveStats}>0</strong>
                            <ProgressSpinner style={{ width: '25px', height: '25px' }} strokeWidth="10" fill="transparent" animationDuration="2s" className="custom-spinner" />
                        </div>
                    </div>
                </div>
                <div className="col-12 md:col-6 lg:col-3">
                    <div className="p-3 bg-gray-300 border-round-xl shadow-5 font-bold">
                        <div className='flex justify-content-between m-1'>
                            <strong className={responsiveGridText}>SMS Sent</strong>
                            <i className='pi pi-send text-lg font-bold text-white' />
                        </div>
                        <div className='flex justify-content-between'>
                            <strong className={responsiveStats}>75</strong>
                            <ProgressSpinner style={{ width: '25px', height: '25px' }} strokeWidth="10" fill="transparent" animationDuration="2s" className="custom-spinner" />
                        </div>
                    </div>
                </div>
                <div className="col-12 md:col-6 lg:col-3 flipup animation-duration-500 animation-iteration-1">
                    <div className="p-3 bg-indigo-300 border-round-xl shadow-5 font-bold">
                        <div className='flex justify-content-between m-1'>
                            <strong className={responsiveGridText}>SMS Delivered</strong>
                            <i className='pi pi-check-square text-lg font-bold text-white' />
                        </div>
                        <div className='flex justify-content-between'>
                            <strong className={responsiveStats}>48</strong>
                            <ProgressSpinner style={{ width: '25px', height: '25px' }} strokeWidth="10" fill="transparent" animationDuration="2s" className="custom-spinner" />
                        </div>
                    </div>
                </div>
                <div className="col-12 md:col-6 lg:col-3">
                    <div className="p-3 bg-teal-300 border-round-xl shadow-5 font-bold">
                        <div className='flex justify-content-between m-1'>
                            <strong className={responsiveGridText}>SMS Replied</strong>
                            <i className='pi pi-reply text-lg font-bold text-white' />
                        </div>
                        <div className='flex justify-content-between'>
                            <strong className={responsiveStats}>14</strong>
                            <ProgressSpinner style={{ width: '25px', height: '25px' }} strokeWidth="10" fill="transparent" animationDuration="2s" className="custom-spinner" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-4'>
                <div className='p-3 border-round-xl shadow-5'>
                    <strong className='text-gray-500 p-1'>Top 10 Email Campaign</strong>
                    <div className="card">
                        <DataTable value={emailCampaigns} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
                            paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                            currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} className='' paginatorRight={paginatorRight}>
                            <Column field="CampaignName" header="Campaign" style={{ width: '15%' }}></Column>
                            <Column field="Total" header="Recipients" style={{ width: '15%' }}></Column>
                            <Column field="Sent" header="Sent" style={{ width: '15%' }}></Column>
                            <Column field="Delivered" header="Delivery Rate%" style={{ width: '15%' }}></Column>
                            <Column field="Opened" header="Open Rate%" style={{ width: '15%' }}></Column>
                            <Column field="Clicked" header="Click Rate%" style={{ width: '15%' }}></Column>
                            <Column field="Failed" header="Failed Rate%" style={{ width: '15%' }}></Column>
                        </DataTable>
                    </div>
                </div>
                <div className='border-round-xl p-3 mt-5 shadow-5'>
                    <strong className='text-gray-500 p-1'>Top 10 SMS Campaign</strong>
                    <div className="card">
                        <DataTable value={emailCampaigns} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
                            paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                            currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} className='' paginatorRight={paginatorRight}>
                            <Column field="CampaignName" header="Campaign" style={{ width: '15%' }}></Column>
                            <Column field="Total" header="Recipients" style={{ width: '15%' }}></Column>
                            <Column field="Sent" header="Sent" style={{ width: '15%' }}></Column>
                            <Column field="Delivered" header="Delivery Rate%" style={{ width: '15%' }}></Column>
                            <Column field="Opened" header="Open Rate%" style={{ width: '15%' }}></Column>
                            <Column field="Clicked" header="Click Rate%" style={{ width: '15%' }}></Column>
                            <Column field="Failed" header="Failed Rate%" style={{ width: '15%' }}></Column>
                        </DataTable>
                    </div>
                </div>
            </div>
            <div className="card p-2 mt-5 border-round-xl shadow-5">
                <strong className='text-gray-500 p-1'>Quick Communication Terminal</strong>
                <p className='text-sm ml-2'>
                    The simple and fast way to send communication, type "<strong>Email</strong>" to send emails, "<strong>SMS</strong>" to send SMS, "<strong>Fax</strong>" to send fax and "<strong>clear</strong>" to clear all commands!
                </p>
                <Terminal
                    className='border-round-lg bg-white'
                    welcomeMessage="Welcome to Lead-Arc"
                    prompt="⌂"
                    pt={{
                        root: 'bg-gray-900 text-gray-300 border-round',
                        prompt: 'text-gray-400 mr-1',
                        command: 'text-primary-500 font-bold',
                        response: 'text-green-500'
                    }}
                />
            </div>

        </div>

    )
}

export default DashboardComponent
