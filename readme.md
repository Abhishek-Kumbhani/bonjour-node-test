### For Advertisement of Device ###

For windows machine => to advertise the device use code as given in advertise.js file.

for linux machine => follow the steps below.
                    1. install avahi => sudo apt-get update
                                     => sudo apt-get install avahi-daemon
                                     => sudo apt-get install avahi-utils
                    
                    2. add config file => go to path `/etc/avahi/services/`.
                                       => create a service file with `.service` extension.
                                       => use code given as in http.service file for reference.

                    3. restart the avahi server => sudo systemctl restart avahi-daemon
                    
                    4. to verify the service => avahi-browse -a
                    

### For Service Discovery of Devices ###

Run the discover.js file to enable service discovery of devices which are bonjour enabled.