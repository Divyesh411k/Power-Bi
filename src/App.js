
import './App.css';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
function App() {
 
    return (
        <div>
            <section className="App">
                <h1>GlobalECont</h1>
                <section id="bi-report">
                    <PowerBIEmbed
                        embedConfig={{
                            type: 'report',   // Since we are reporting a BI report, set the type to report
                            id: '944b7c15-678f-4b57-8b88-13e3b169acbc', // Add the report Id here
                            embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=944b7c15-678f-4b57-8b88-13e3b169acbc&groupId=a1d98e09-afb8-4f66-bf94-59ec2eab4558&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1DLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7InVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d', // Add the embed url here
                            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1HTHFqOThWTkxvWGFGZnBKQ0JwZ0I0SmFLcyIsImtpZCI6Ik1HTHFqOThWTkxvWGFGZnBKQ0JwZ0I0SmFLcyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZDFmMTQzNDgtZjFiNS00YTA5LWFjOTktN2ViZjIxM2NiYzgxLyIsImlhdCI6MTcyMDAwMDQ3OSwibmJmIjoxNzIwMDAwNDc5LCJleHAiOjE3MjAwMDU4OTcsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJFMmNBZ3U5WEZDZDZkeFV1bThyckdzTDVUMnRheGJWN2dZRmJURkpZSXIxV1hGR1JucjNpVjhxenRmdCsvSGp3aEkxNy9iTnlBQT09IiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiS0hVTlQiLCJnaXZlbl9uYW1lIjoiRElWWUVTSCIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjIwNi44NC4yMzkuNDQiLCJuYW1lIjoiRElWWUVTSCBLSFVOVCAtIDYwMDA5MjEwMTE2Iiwib2lkIjoiYTZhOWMzMTctZDIxNS00MjAxLTlhNDYtMDRmY2NlMGJiODFlIiwicHVpZCI6IjEwMDMyMDAxQzc2RDk3MDYiLCJyaCI6IjAuQVQwQVNFUHgwYlh4Q1Vxc21YNl9JVHk4Z1FrQUFBQUFBQUFBd0FBQUFBQUFBQUE5QUZvLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6IkN0b0prU0I1cExOaFk0UkpWenl1RXlXZ2dXOVIzbnB3VDVjVmJ2X1JFcE0iLCJ0aWQiOiJkMWYxNDM0OC1mMWI1LTRhMDktYWM5OS03ZWJmMjEzY2JjODEiLCJ1bmlxdWVfbmFtZSI6IkRJVllFU0guS0hVTlQxMTZAc3ZrbW11bWJhaS5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJESVZZRVNILktIVU5UMTE2QHN2a21tdW1iYWkub25taWNyb3NvZnQuY29tIiwidXRpIjoicFowQmF3aFViVXFySWFjWmY0aFZBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19pZHJlbCI6IjI0IDEifQ.VTSfSfIY2-3diXnIr5Ot3v3rPDFDqkY0gl5322jdyfxXGSYTA9oNcG1Re_lu3yNsuNaOJg0oDjI1Jh9W1e3pSplkCuPKRHa6EuutDVd38fZYxJ6odUJL-FvzAzWCAsUWsONyIt-KQFjxZUIf2K2uDqh4RMKBkI3shxqM4ZkJ-EEiqdlABy1VeO4hhhU0S9E75t7CMrTGBweHVRTyvOo1NBGHjXcpWeMr3-VAGaC5GwzYkj-hgO3IMRIYWSycsF4rrrVhPP00YAi6bHTnFXdchiiSLxATBqdU5HhGEZeBx3F1mab_fUXhLCMZ9PUJ-PkQ5hVFz1-tHf9N9yVQQZg1fA',
                            tokenType: models.TokenType.Aad, // Since we are using an Azure Active Directory access token, set the token type to Aad
                            settings: {
                                panes: {
                                    filters: {
                                        visible: false
                                    },
                                    pageNavigation: {
                                        visible: false
                                    },
                                    selection: {
                                        visible: false
                                    },
                                    fields: {
                                        expanded: false,
                                        visible: false
                                    },
                                    background: models.BackgroundType.Transparent,
                                    visualSettings: {
                                        visualHeaders: [
                                            {
                                                settings: {
                                                    visible: false
                                                }
                                            },
                                        ]
                                    }

                                },
                                background: models.BackgroundType.Transparent,
                            }
                        }}

                        eventHandlers={
                            new Map([
                                ['loaded', function () { console.log('Report loaded'); }],
                                ['rendered', function () { console.log('Report rendered'); }],
                                ['error', function (event) { console.log(event.detail); }],
                                ['visualClicked', () => console.log('visual clicked')],
                                ['pageChanged', (event) => console.log(event)],
                            ])
                        }

                        cssClassName={"Embed-container"}

                        getEmbeddedComponent={(embeddedReport) => {
                            window.report = embeddedReport; // save report in window object
                        }}
                    />
                </section>
            </section>

        </div>
    );
}

export default App;
