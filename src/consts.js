export const
        cmdImport = 'gjs-open-import-webpage',
        cmdAddBasicStyles = 'slp-add-base-styles',
        cmdDeviceDesktop = 'set-device-desktop',
        cmdDeviceTablet = 'set-device-tablet',
        cmdDeviceMobile = 'set-device-mobile',
        cmdClear = 'canvas-clear',
        cmdHide = 'slp-hide-cmd',
        cmdShowHideManager = 'slp-show-hm',
        cmdHideHideManager = 'slp-hide-hm',
        cmdToggleHideManager = 'slp-toggle-hm',
        
        showInDesktop = 'showInDesktop',
        
        basicStyle = `
        <style>
                * {
                    -webkit-box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    box-sizing: border-box;
                }
                *:before,
                *:after {
                    -webkit-box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    box-sizing: border-box;
                }
                .spl-container {
                    margin-right: auto;
                    margin-left: auto;
                    padding-left: 15px;
                    padding-right: 15px;
                    display: block;
                    overflow: auto;
                }
                .spl-container-fluid {
                    margin-right: auto;
                    margin-left: auto;
                    padding-left: 20px;
                    padding-right: 20px;
                    display: block;
                    overflow: auto;
                }
                .spl-row {
                    margin-left: -15px;
                    margin-right: -15px;
                    display: block;
                    overflow: auto;
                }
                @media (min-width: 768px) {
                    .spl-container {
                        width: 750px;
                    }
                    .spl-row-sm{
                        display:flex;
                    }
                }
                @media (min-width: 992px) {
                    .spl-container {
                        width: 970px;
                    }
                    .spl-row-md {
                        display: flex;
                    }
                }
                @media (min-width: 1200px) {
                    .spl-container {
                        width: 98%;
                    }
                    .spl-row-lg{
                        display:flex;
                    }
                }
                .spl-col-xs-1, .spl-col-sm-1, .spl-col-md-1, .spl-col-lg-1, .spl-col-xs-2, .spl-col-sm-2, .spl-col-md-2, .spl-col-lg-2, .spl-col-xs-3, .spl-col-sm-3, .spl-col-md-3, .spl-col-lg-3, .spl-col-xs-4, .spl-col-sm-4, .spl-col-md-4, .spl-col-lg-4, .spl-col-xs-5, .spl-col-sm-5, .spl-col-md-5, .spl-col-lg-5, .spl-col-xs-6, .spl-col-sm-6, .spl-col-md-6, .spl-col-lg-6, .spl-col-xs-7, .spl-col-sm-7, .spl-col-md-7, .spl-col-lg-7, .spl-col-xs-8, .spl-col-sm-8, .spl-col-md-8, .spl-col-lg-8, .spl-col-xs-9, .spl-col-sm-9, .spl-col-md-9, .spl-col-lg-9, .spl-col-xs-10, .spl-col-sm-10, .spl-col-md-10, .spl-col-lg-10, .spl-col-xs-11, .spl-col-sm-11, .spl-col-md-11, .spl-col-lg-11, .spl-col-xs-12, .spl-col-sm-12, .spl-col-md-12, .spl-col-lg-12 {
                    position: relative;
                    min-height: 100px;
                    padding-left: 15px;
                    padding-right: 15px;
                }
                .spl-col-xs-1, .spl-col-xs-2, .spl-col-xs-3, .spl-col-xs-4, .spl-col-xs-5, .spl-col-xs-6, .spl-col-xs-7, .spl-col-xs-8, .spl-col-xs-9, .spl-col-xs-10, .spl-col-xs-11, .spl-col-xs-12 {
                    float: left;
                }
                .spl-col-xs-12 {
                    width: 100%;
                }
                .spl-col-xs-11 {
                    width: 91.66666667%;
                }
                .spl-col-xs-10 {
                    width: 83.33333333%;
                }
                .spl-col-xs-9 {
                    width: 75%;
                }
                .spl-col-xs-8 {
                    width: 66.66666667%;
                }
                .spl-col-xs-7 {
                    width: 58.33333333%;
                }
                .spl-col-xs-6 {
                    width: 50%;
                }
                .spl-col-xs-5 {
                    width: 41.66666667%;
                }
                .spl-col-xs-4 {
                    width: 33.33333333%;
                }
                .spl-col-xs-3 {
                    width: 25%;
                }
                .spl-col-xs-2 {
                    width: 16.66666667%;
                }
                .spl-col-xs-1 {
                    width: 8.33333333%;
                }
                @media (min-width: 768px) {
                    .spl-col-sm-1, .spl-col-sm-2, .spl-col-sm-3, .spl-col-sm-4, .spl-col-sm-5, .spl-col-sm-6, .spl-col-sm-7, .spl-col-sm-8, .spl-col-sm-9, .spl-col-sm-10, .spl-col-sm-11, .spl-col-sm-12 {
                        float: left;
                    }
                    .spl-col-sm-12 {
                        width: 100%;
                    }
                    .spl-col-sm-11 {
                        width: 91.66666667%;
                    }
                    .spl-col-sm-10 {
                        width: 83.33333333%;
                    }
                    .spl-col-sm-9 {
                        width: 75%;
                    }
                    .spl-col-sm-8 {
                        width: 66.66666667%;
                    }
                    .spl-col-sm-7 {
                        width: 58.33333333%;
                    }
                    .spl-col-sm-6 {
                        width: 50%;
                    }
                    .spl-col-sm-5 {
                        width: 41.66666667%;
                    }
                    .spl-col-sm-4 {
                        width: 33.33333333%;
                    }
                    .spl-col-sm-3 {
                        width: 25%;
                    }
                    .spl-col-sm-2 {
                        width: 16.66666667%;
                    }
                    .spl-col-sm-1 {
                        width: 8.33333333%;
                    }
                }
                @media (min-width: 992px) {
                    .spl-col-md-1, .spl-col-md-2, .spl-col-md-3, .spl-col-md-4, .spl-col-md-5, .spl-col-md-6, .spl-col-md-7, .spl-col-md-8, .spl-col-md-9, .spl-col-md-10, .spl-col-md-11, .spl-col-md-12 {
                        float: left;
                    }
                    .spl-col-md-12 {
                        width: 100%;
                    }
                    .spl-col-md-11 {
                        width: 91.66666667%;
                    }
                    .spl-col-md-10 {
                        width: 83.33333333%;
                    }
                    .spl-col-md-9 {
                        width: 75%;
                    }
                    .spl-col-md-8 {
                        width: 66.66666667%;
                    }
                    .spl-col-md-7 {
                        width: 58.33333333%;
                    }
                    .spl-col-md-6 {
                        width: 50%;
                    }
                    .spl-col-md-5 {
                        width: 41.66666667%;
                    }
                    .spl-col-md-4 {
                        width: 33.33333333%;
                    }
                    .spl-col-md-3 {
                        width: 25%;
                    }
                    .spl-col-md-2 {
                        width: 16.66666667%;
                    }
                    .spl-col-md-1 {
                        width: 8.33333333%;
                    }
                }
                @media (min-width: 1200px) {
                    .spl-col-lg-1, .spl-col-lg-2, .spl-col-lg-3, .spl-col-lg-4, .spl-col-lg-5, .spl-col-lg-6, .spl-col-lg-7, .spl-col-lg-8, .spl-col-lg-9, .spl-col-lg-10, .spl-col-lg-11, .spl-col-lg-12 {
                        float: left;
                    }
                    .spl-col-lg-12 {
                        width: 100%;
                    }
                    .spl-col-lg-11 {
                        width: 91.66666667%;
                    }
                    .spl-col-lg-10 {
                        width: 83.33333333%;
                    }
                    .spl-col-lg-9 {
                        width: 75%;
                    }
                    .spl-col-lg-8 {
                        width: 66.66666667%;
                    }
                    .spl-col-lg-7 {
                        width: 58.33333333%;
                    }
                    .spl-col-lg-6 {
                        width: 50%;
                    }
                    .spl-col-lg-5 {
                        width: 41.66666667%;
                    }
                    .spl-col-lg-4 {
                        width: 33.33333333%;
                    }
                    .spl-col-lg-3 {
                        width: 25%;
                    }
                    .spl-col-lg-2 {
                        width: 16.66666667%;
                    }
                    .spl-col-lg-1 {
                        width: 8.33333333%;
                    }
                }
                .spl-clearfix:before,.spl-clearfix:after,.spl-container:before,.spl-container:after,.spl-container-fluid:before,.spl-container-fluid:after,.spl-row:before,.spl-row:after {
                    content: " ";
                    display: table;
                }
                .spl-clearfix:after,.spl-container:after,.spl-container-fluid:after,.spl-row:after {
                    clear: both;
                }
                .spl-center-block {
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                }
            </style>
        
        <style>
            .gjs-hovered{
                outline: 1px dashed #3899ec !important;
                outline-offset: 0px !important;
            }   
            .gjs-comp-selected{
                outline: 2px dashed #3899ec !important;
                outline-offset: 0px !important;
            }
            
            @media (max-width: 350px) {
                .spl-hide-mobile, .spl-hide-Mobile, .spl-hide-Mobile-portrait, .spl-hide-mobile-portrait {
                    display: none !important;
                }
            }

            @media (min-width: 351px) and (max-width: 768px) {
                .spl-hide-tablet, .spl-hide-Tablet{
                    display: none !important;
                }
            }

            @media (min-width: 769px) {
                .spl-hide-desktop, .spl-hide-Desktop{
                    display: none !important;
                }
            }
        
            @-webkit-keyframes slp-dropIn {
              from,
              80%,
              to {
                -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
                animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
              }

              0% {
                opacity: 0;
                -webkit-transform: scale3d(0.8, 0.8, 0.8);
                transform: scale3d(0.8, 0.8, 0.8);
              }

              80% {
                opacity: 1;
                -webkit-transform: scale3d(1.02, 1.02, 1.02);
                transform: scale3d(1.02, 1.02, 1.02);
              }

              to {
                opacity: 1;
                -webkit-transform: scale3d(1, 1, 1);
                transform: scale3d(1, 1, 1);
              }
            }

            @keyframes slp-dropIn {
              from,
              80%,
              to {
                -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
                animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
              }

              0% {
                opacity: 0;
                -webkit-transform: scale3d(0.8, 0.8, 0.8);
                transform: scale3d(0.8, 0.8, 0.8);
              }

              80% {
                opacity: 1;
                -webkit-transform: scale3d(1.02, 1.02, 1.02);
                transform: scale3d(1.02, 1.02, 1.02);
              }

              to {
                opacity: 1;
                -webkit-transform: scale3d(1, 1, 1);
                transform: scale3d(1, 1, 1);
              }
            }

            .slp-dropIn {
              -webkit-animation-duration: .1s;
              animation-duration: .1s;
              -webkit-animation-name: slp-dropIn;
              animation-name: slp-dropIn;
            }
        </style>`;
