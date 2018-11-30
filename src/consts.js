export const
        cmdImport = 'gjs-open-import-webpage',
        cmdAddBasicStyles = 'slp-add-base-styles',
        cmdDeviceDesktop = 'set-device-desktop',
        cmdDeviceTablet = 'set-device-tablet',
        cmdDeviceMobile = 'set-device-mobile',
        cmdClear = 'canvas-clear',

        basicStyle = `<style>
            .gjs-hovered{
                outline: 1px dashed #3899ec !important;
                outline-offset: 0px !important;
            }   
            .gjs-comp-selected{
                outline: 2px dashed #3899ec !important;
                outline-offset: 0px !important;
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
