<?php

return array (
  'accepted'             => 'Le champ :attribute doit être accepté.',
  'radio'                => 'Le :attribute doit être accepté.',
  'active_url'           => 'Le :attribute n\'est pas une URL valide.',
  'after'                => 'Le :attribute doit être une date après :date.',
  'after_or_equal'       => 'Le :attribute doit être une date après ou égale à :date.',
  'alpha'                => 'Le :attribute ne peut contenir que des lettres.',
  'alpha_dash'           => 'Le :attribute ne peut contenir que des lettres, des chiffres, des tirets et des underscores.',
  'alpha_num'            => 'Le :attribute ne peut contenir que des lettres et des chiffres.',
  'array'                => 'Le :attribute doit être un tableau.',
  'before'               => 'Le :attribute doit être une date avant :date.',
  'before_or_equal'      => 'Le :attribute doit être une date avant ou égale à :date.',
  'between'              => array (
    'numeric' => 'Le :attribute doit être entre :min et :max.',
    'file'    => 'Le :attribute doit être entre :min et :max kilobytes.',
    'string'  => 'Le :attribute doit être entre :min et :max caractères.',
    'array'   => 'Le :attribute doit avoir entre :min et :max éléments.',
  ),
  'boolean'              => 'Le champ :attribute doit être vrai ou faux.',
  'confirmed'            => 'La confirmation du :attribute ne correspond pas.',
  'date'                 => 'Le :attribute n\'est pas une date valide.',
  'date_equals'          => 'Le :attribute doit être une date égale à :date.',
  'date_format'          => 'Le :attribute ne correspond pas au format :format.',
  'different'            => 'Le :attribute et :other doivent être différents.',
  'digits'               => 'Le :attribute doit comporter :digits chiffres.',
  'digits_between'       => 'Le :attribute doit comporter entre :min et :max chiffres.',
  'dimensions'           => 'Le :attribute a des dimensions d\'image invalides.',
  'distinct'             => 'Le champ :attribute a une valeur en double.',
  'email'                => 'Le :attribute doit être une adresse e-mail valide.',
  'ends_with'            => 'Le :attribute doit se terminer par l\'un des éléments suivants : :values.',
  'exists'               => 'Le :attribute sélectionné est invalide.',
  'file'                 => 'Le :attribute doit être un fichier.',
  'filled'               => 'Le champ :attribute doit avoir une valeur.',
  'gt'                   => array (
    'numeric' => 'Le :attribute doit être supérieur à :value.',
    'file'    => 'Le :attribute doit être supérieur à :value kilobytes.',
    'string'  => 'Le :attribute doit être supérieur à :value caractères.',
    'array'   => 'Le :attribute doit avoir plus de :value éléments.',
  ),
  'gte'                  => array (
    'numeric' => 'Le :attribute doit être supérieur ou égal à :value.',
    'file'    => 'Le :attribute doit être supérieur ou égal à :value kilobytes.',
    'string'  => 'Le :attribute doit être supérieur ou égal à :value caractères.',
    'array'   => 'Le :attribute doit avoir :value éléments ou plus.',
  ),
  'image'                => 'Le :attribute doit être une image.',
  'in'                   => 'Le :attribute sélectionné est invalide.',
  'in_array'             => 'Le champ :attribute n\'existe pas dans :other.',
  'integer'              => 'Le :attribute doit être un entier.',
  'ip'                   => 'Le :attribute doit être une adresse IP valide.',
  'ipv4'                 => 'Le :attribute doit être une adresse IPv4 valide.',
  'ipv6'                 => 'Le :attribute doit être une adresse IPv6 valide.',
  'json'                 => 'Le :attribute doit être une chaîne JSON valide.',
  'lt'                   => array (
    'numeric' => 'Le :attribute doit être inférieur à :value.',
    'file'    => 'Le :attribute doit être inférieur à :value kilobytes.',
    'string'  => 'Le :attribute doit être inférieur à :value caractères.',
    'array'   => 'Le :attribute doit avoir moins de :value éléments.',
  ),
  'lte'                  => array (
    'numeric' => 'Le :attribute doit être inférieur ou égal à :value.',
    'file'    => 'Le :attribute doit être inférieur ou égal à :value kilobytes.',
    'string'  => 'Le :attribute doit être inférieur ou égal à :value caractères.',
    'array'   => 'Le :attribute ne doit pas avoir plus de :value éléments.',
  ),
  'max'                  => array (
    'numeric' => 'Le :attribute ne peut pas être supérieur à :max.',
    'file'    => 'Le :attribute ne peut pas être supérieur à :max kilobytes.',
    'string'  => 'Le :attribute ne peut pas être supérieur à :max caractères.',
    'array'   => 'Le :attribute ne peut pas avoir plus de :max éléments.',
  ),
  'mimes'                => 'Le :attribute doit être un fichier de type :values.',
  'mimetypes'            => 'Le :attribute doit être un fichier de type :values.',
  'min'                  => array (
    'numeric' => 'Le :attribute doit être au moins :min.',
    'file'    => 'Le :attribute doit être d\'au moins :min kilobytes.',
    'string'  => 'Le :attribute doit comporter au moins :min caractères.',
    'array'   => 'Le :attribute doit avoir au moins :min éléments.',
  ),
  'not_in'               => 'Le :attribute sélectionné est invalide.',
  'not_regex'            => 'Le format du :attribute est invalide.',
  'numeric'              => 'Le :attribute doit être un nombre.',
  'password'             => 'Le mot de passe est incorrect.',
  'present'              => 'Le champ :attribute doit être présent.',
  'regex'                => 'Le format du :attribute est invalide.',
  'required'             => 'Le champ :attribute est requis.',
  'required_if'         => 'Le champ :attribute est requis lorsque :other est :value.',
  'required_unless'     => 'Le champ :attribute est requis à moins que :other soit dans :values.',
  'required_with'       => 'Le champ :attribute est requis lorsque :values est présent.',
  'required_with_all'   => 'Le champ :attribute est requis lorsque :values sont présents.',
  'required_without'    => 'Le champ :attribute est requis lorsque :values n\'est pas présent.',
  'required_without_all' => 'Le champ :attribute est requis lorsque aucun des :values n\'est présent.',
  'same'                => 'Le :attribute et :other doivent correspondre.',
  'size'                 => array (
    'numeric' => 'Le :attribute doit être :size.',
    'file'    => 'Le :attribute doit être :size kilobytes.',
    'string'  => 'Le :attribute doit comporter :size caractères.',
    'array'   => 'Le :attribute doit contenir :size éléments.',
  ),
  'starts_with'          => 'Le :attribute doit commencer par l\'un des éléments suivants : :values.',
  'string'               => 'Le :attribute doit être une chaîne.',
  'timezone'             => 'Le :attribute doit être une zone valide.',
  'unique'               => 'Le :attribute a déjà été pris.',
  'uploaded'             => 'Le :attribute a échoué à être téléchargé.',
  'url'                  => 'Le format du :attribute est invalide.',
  'uuid'                 => 'Le :attribute doit être un UUID valide.',
  'image64'              => 'Le :attribute doit être un fichier de type :values.',
  'custom'               => array (
    'attribute-name' => array (
      'rule-name' => 'message-personnalisé',
    ),
  ),
  'attributes'           => array (
    'dashboard'                             => 'Tableau de Bord',
    'profile'                               => 'Profil',
    'image'                                 => 'Image',
    'setting'                               => 'Paramètre',
    'settings'                              => 'Paramètres',
    'name'                                  => 'Nom',
    'title'                                 => 'Titre',
    'sort_order'                            => 'Ordre de Tri',
    'location_id'                           => 'Emplacement',
    'status'                                => 'Statut',
    'shop'                                  => 'Magasin',
    'add'                                   => 'Ajouter',
    'edit'                                  => 'Éditer',
    'view'                                  => 'Voir',
    'user_id'                               => 'Utilisateur',
    'area_id'                               => 'Zone',
    'description'                           => 'Description',
    'delivery_charge'                       => 'Frais de Livraison',
    'lat'                                   => 'Latitude',
    'long'                                  => 'Longitude',
    'opening_time'                          => 'Heure d\'Ouverture',
    'closing_time'                          => 'Heure de Fermeture',
    'current_status'                        => 'Statut Actuel',
    'location'                              => 'Emplacement',
    'locations'                             => 'Emplacements',
    'cuisine'                               => 'Cuisine',
    'coupon'                                => 'Coupon',
    'category'                              => 'Catégorie',
    'area'                                  => 'Zone',
    'areas'                                 => 'Zones',
    'restaurant-product'                    => 'Produit du Restaurant',
    'reservations'                          => 'Réservations',
    'reservation'                           => 'Réservation',
    'categories'                            => 'Catégories',
    'restaurantproducts'                    => 'Produits du Restaurant',
    'product_id'                            => 'Produit',
    'unit'                                  => 'Unité',
    'unit_price'                            => 'Prix Unitaire',
    'quantity'                              => 'Quantité',
    'order'                                 => 'Commande',
    'live_orders'                           => 'Commandes en Direct',
    'orders'                                => 'Commandes',
    'dineInOrders'                          => 'Commandes sur Place',
    'products'                              => 'Produits',
    'request-products'                      => 'Demander des Produits',
    'withdraw'                              => 'Retrait',
    'users'                                 => 'Utilisateurs',
    'customers'                             => 'Clients',
    'administrators'                        => 'Administrateurs',
    'updates'                               => 'Mises à Jour',
    'restaurantproduct'                     => 'Produit du Restaurant',
    'cuisines'                              => 'Cuisines',
    'shopaddress'                           => 'Adresse',
    'first_name'                            => 'Prénom',
    'last_name'                             => 'Nom de Famille',
    'email'                                 => 'Email',
    'username'                              => 'Nom d\'Utilisateur',
    'phone'                                 => 'Téléphone',
    'address'                               => 'Adresse',
    'emailsettings'                         => 'Paramètres de l\'Email',
    'app_settings'                          => 'Paramètres de l\'Application',
    'support_settings'                      => 'Paramètres de Support',
    'sms_settings'                          => 'Paramètres SMS',
    'notificationsetting'                   => 'Paramètres de Notification',
    'delivery-boys'                         => 'Livreurs',
    'file-import-export'                    => 'Importer des Restaurants',
    'waiters'                               => 'Serveurs',
    'menu-template'                         => 'Modèles de Menu',
    'delivery'                              => 'Livraison',
    'transaction'                           => 'Transaction',
    'restaurant-owner-sales-report'         => 'Rapport de Ventes du Propriétaire du Restaurant',
    'reservation-report'                    => 'Rapport de Réservation',
    'admin-commission-report'               => 'Rapport de Commission de l\'Administrateur',
    'credit-balance-report'                 => 'Rapport de Solde de Crédit',
    'cash-on-delivery-order-balance-report' => 'Rapport de Solde de Commande Contre Remboursement',
    'withdraw-report'                       => 'Rapport de Retrait',
    'delivery-boy-collection-report'        => 'Rapport de Collecte des Livreurs',
    'customer-report'                       => 'Rapport Client',
    'mrp'                                   => 'MRP',
    'roles'                                 => 'Rôles',
    'banners'                               => 'Bannières',
    'request-withdraw'                      => 'Demander un Retrait',
    'pages'                                 => 'Pages',
    'footer_menu_section_id'                => 'Section de Menu du Pied de Page',
    'url'                                   => 'URL',
    'collections'                           => 'Collections',
    'date'                                  => 'Date',
    'order_notifications'                   => 'Demandes en Attente',
    'addons'                                => 'Extensions',
    'bank'                                  => 'Banque',
    'amount'                                => 'Montant',
    'payment_settings'                      => 'Paramètres de Paiement',
    'payment_type'                          => 'Type de Paiement',
    'site_settings'                         => 'Paramètres du Site',
    'email_settings'                        => 'Paramètres de l\'Email',
    'notification_settings'                 => 'Paramètres de Notification',
    'social_login_settings'                 => 'Paramètres de Connexion Sociale',
    'otp_settings'                          => 'Paramètres OTP',
    'homepage_settings'                     => 'Paramètres de la Page d\'Accueil',
    'social_settings'                       => 'Paramètres Sociaux',
    'ratings'                               => 'Évaluations',
    'terms_and_conditions'                  => 'Conditions Générales',
    'template'                              => 'Modèle',
    'billing_details'                       => 'Détails de Facturation',
    'cancel'                                => 'Annuler',
    'resume'                                => 'Reprendre',
    'swap'                                  => 'Échanger',
    'card'                                  => 'Mettre à Jour la Carte',
    'invoices'                              => 'Factures d\'Abonnement',
    'coupon'                                => 'Coupon',
    'gateway_id'                            => 'ID de la Passerelle',
    'product_limit'                         => 'Limite de Produits',
    'active'                                => 'Actif',
    'plans'                                 => 'Plans',
    'subscribers'                           => 'Abonnés',
    'tables'                                => 'Tables',
    'complaints'                            => 'Réclamations',
    'capacity'                              => 'Capacité',
    'time-slots'                            => 'Créneaux Horaires',
    'start_time'                            => 'Heure de Début',
    'end_time'                              => 'Heure de Fin',
    'restaurant_id'                         => 'Restaurant',
    'menu-items'                            => 'Élément de Menu',
    'restaurants'                           => 'Restaurants',
    'google_map_setting'                    => 'Paramètre de Google Map',
    'restaurant-owners'                     => 'Propriétaires de Restaurants',
    'language'                              => 'Langue',
    'push-notification'                     => 'Notification Push',
    'purchasekey_settings'                  => 'Paramètres de Clé d\'Achat',
    'update-log'                            => 'Journal des Mises à Jour',
    'user'                                  => 'Utilisateurs',
  ),
);
